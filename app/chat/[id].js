import { View, Platform, KeyboardAvoidingView } from "react-native";
import Text from "../../components/config/Text";
import { Stack, useGlobalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ScrollView from "../../components/config/ScrollView";

import styles from "../../styles/chat";
import ChatHeader from "../../components/screens/chat/header/header.component";
import TextBoxComponent from "../../components/screens/chat/TextBox/TextBox.component";

import Message from "../../components/screens/chat/message/message.component";

const Chat = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider style={styles.chat}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Stack.Screen
          options={{
            header: () => {
              return null;
            },
          }}
        />

        <View style={styles.chatBody}>
          <ScrollView style={styles.chatBodyContainer}>
            <SafeAreaView
              style={{
                paddingTop: insets.top + 10,
                paddingBottom: insets.bottom + 40,
                height: "100%",
              }}
            >
              <Message />
            </SafeAreaView>
          </ScrollView>
          {/* my blur views */}
          <ChatHeader />
          <TextBoxComponent />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default Chat;

// fix the scrollbar not scrolling to the bottom of the page

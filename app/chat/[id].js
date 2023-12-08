import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Text from "../../components/config/Text";
import { Stack, useGlobalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import styles from "../../styles/chat";
import ChatHeader from "../../components/screens/chat/header/header.component";
import TextBoxComponent from "../../components/screens/chat/TextBox/TextBox.component";

const Chat = () => {
  return (
    <SafeAreaView style={styles.chat}>
      <Stack.Screen
        options={{
          header: () => {
            return null;
          },
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.chatBody}>
          <ScrollView>
            <View style={{ marginTop: 60 }}>
              <Text>Test</Text>
            </View>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <StatusBar style="light" />
      <ChatHeader />
      <TextBoxComponent />
    </SafeAreaView>
  );
};

export default Chat;

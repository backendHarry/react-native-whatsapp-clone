import { useState } from "react";
import { View, Platform, KeyboardAvoidingView, FlatList } from "react-native";
import Text from "../../components/config/Text";
import { Stack, useGlobalSearchParams } from "expo-router";

import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ScrollView from "../../components/config/ScrollView";

import styles from "../../styles/chat";
import ChatHeader from "../../components/screens/chat/header/header.component";
import TextBoxComponent from "../../components/screens/chat/TextBox/TextBox.component";

import MessagesArray from "../../data/chat";
import Message from "../../components/screens/chat/message/message.component";

const Chat = () => {
  const insets = useSafeAreaInsets();

  const [Messages, setMessages] = useState(MessagesArray);

  // render function for Messages component

  const renderItem = ({ item, index }) => {
    const { message, time, chatOwner } = item;
    const nextMessage = Messages[index + 1];
    const currentMessage = item;
    const isSameSender =
      nextMessage && currentMessage.senderId == nextMessage.senderId;

    const margin = isSameSender ? 0 : 15;

    return (
      <Message
        message={message}
        time={time}
        chatOwner={chatOwner}
        marginVertical={margin}
      />
    );
  };

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
              <FlatList
                data={Messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
              />
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

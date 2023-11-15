import { StatusBar } from "expo-status-bar";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Link, Stack } from "expo-router";

// styles
import styles from "../styles/home";

// global/config component
import Text from "../components/config/Text";

// components
import Header from "../components/screens/home/header/header.component";
import Search from "../components/screens/home/search/search.component";
import Conversation from "../components/screens/home/conversations/conversation.component";

import NavBar from "../components/common/navbar/navbar.component";

const Home = () => {
  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Stack.Screen
              options={{
                header: () => {
                  return null;
                },
              }}
            />

            <View style={styles.centerContainer}>
              <Header />
              <View style={styles.chatHeaderTextView}>
                <Text style={styles.chatHeaderText}>Chats</Text>
              </View>
              <Search />
              <View style={styles.chatOptions}>
                <Text style={styles.chatOptionText}>Broadcast Lists</Text>
                <Text style={styles.chatOptionText}>New Group</Text>
              </View>
            </View>
            <View style={styles.conversationContainer}>
              <Conversation />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <StatusBar style="light" />
      </KeyboardAvoidingView>
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;

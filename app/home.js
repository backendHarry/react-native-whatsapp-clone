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

import { COLORS, CONSTANTS } from "../theme/index";

// styles
import styles from "../styles/home";

// global/config component
import Text from "../components/config/Text";

// components
import Header from "../components/screens/home/header/header.component";
import Search from "../components/screens/home/search/search.component";

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

            <Header />
            <View style={styles.chatHeaderTextView}>
              <Text style={styles.chatHeaderText}>Chats</Text>
            </View>
            <Search />
          </View>
        </TouchableWithoutFeedback>

        <StatusBar style="light" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;

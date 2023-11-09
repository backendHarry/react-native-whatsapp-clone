import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

import { COLORS, CONSTANTS } from "../theme/index";

// styles
import styles from "../styles/home";

// components (global and screen)
// Globals
import Text from "../components/config/Text";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          header: () => {
            return null;
          },
        }}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;

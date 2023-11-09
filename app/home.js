import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

import { COLORS, CONSTANTS } from "../theme/index";

// styles
import styles from "../styles/home";

// global/config component
import Text from "../components/config/Text";

// components
import Header from "../components/screens/home/header/header.component";

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

      <View>
        <Header />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;

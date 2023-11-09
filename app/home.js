import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { COLORS } from "../theme/index";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "home",
          headerStyle: { backgroundColor: COLORS.background },
          headerTitle: "",
        }}
      />

      <View>
        <Text>Hello world</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

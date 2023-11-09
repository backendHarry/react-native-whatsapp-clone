import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { COLORS } from "../theme/index";

// components (global and scree)
// G
import Text from "../components/globals/Text";

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
        <Text style={{ color: "black" }}>Hello world</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

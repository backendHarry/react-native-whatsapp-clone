import { SafeAreaView, View, Text } from "react-native";
import { Stack } from "expo-router";

const About = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          header: (props) => (
            <View style={{ backgroundColor: "red", height: 80 }}>
              <View style={{ marginTop: 60 }}>
                <Text>Hello!</Text>
              </View>
            </View>
          ),
        }}
      />
      <Text>About </Text>
    </SafeAreaView>
  );
};

export default About;

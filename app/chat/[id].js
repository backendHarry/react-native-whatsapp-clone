import { View } from "react-native";
import Text from "../../components/config/Text";
import { Stack, useGlobalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";

import styles from "../../styles/chat";
import ChatHeader from "../../components/screens/chat/header/header.component";
import TextBoxComponent from "../../components/screens/chat/TextBox/TextBox.component";

//<SafeAreaView style={styles.chat}>
//       <Stack.Screen
//         options={{
//           header: () => {
//             return null;
//           },
//         }}
//       />

const Chat = () => {
  return (
    <View>
      <Text>Hello Chat</Text>
    </View>
  );
};

export default Chat;

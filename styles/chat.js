import { StyleSheet } from "react-native";
import { COLORS } from "../theme/index";

const styles = StyleSheet.create({
  chat: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  chatBody: {
    flexGrow: 1,
    height: "100%",
  },
});

export default styles;

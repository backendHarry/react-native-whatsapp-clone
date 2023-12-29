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
  chatBodyContainer: {
    marginTop: 10,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles;

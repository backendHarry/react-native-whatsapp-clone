import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  message: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    width: "100%",
    marginLeft: "auto",
    paddingHorizontal: 10,
    borderRadius: 20,
    position: "relative",
  },
  messageText: {
    // flex: 1,
    flex: 1,
  },
});

export default styles;

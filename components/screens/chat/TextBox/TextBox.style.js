import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS } from "../../../../theme/index";

const styles = StyleSheet.create({
  textBox: {
    position: "absolute",
    backgroundColor: COLORS.messageInputBackground,
    bottom: 0,
    left: 0,
    width: "100%",
    height: CONSTANTS.textBoxHeight,
    overflow: "hidden",
    zIndex: 1,
  },
  textBoxContainer: {
    width: CONSTANTS.width,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles;

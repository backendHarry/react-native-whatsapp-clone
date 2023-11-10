import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, CONSTANTS } from "../theme/index";

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: CONSTANTS.width,
  },
  chatHeaderTextView: {
    marginTop: 15,
    marginBottom: 10,
  },
  chatHeaderText: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONTS.bold,
    color: COLORS.chatWhite,
  },
});

export default styles;

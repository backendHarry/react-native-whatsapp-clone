import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, CONSTANTS } from "../theme/index";

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  container: {
    height: "100%",
  },
  centerContainer: {
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
  chatOptions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 25,
  },
  chatOptionText: {
    fontFamily: FONTS.light,
    fontSize: SIZES.medium,
    color: COLORS.bluePrimary,
  },
  conversationContainer: {
    marginTop: 15,
    borderColor: COLORS.grayBorder,
    borderTopWidth: 1,
  },
});

export default styles;

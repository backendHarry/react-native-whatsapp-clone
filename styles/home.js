import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, CONSTANTS } from "../theme/index";

const infoMessageStyle = {
  fontSize: SIZES.small,
  fontFamily: FONTS.medium,
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    flex: 1,
    height: "100%",
  },
  content: {
    height: `${100 - parseInt(CONSTANTS.navBarHeight) + 5}%`,
    flexGrow: 1,
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
    marginBottom: 15,
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
  info: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: "5%",
  },
  infoMessage: {
    ...infoMessageStyle,
  },
  infoMessageHighlight: {
    ...infoMessageStyle,
    color: COLORS.bluePrimary,
    marginLeft: 3,
  },
});

export default styles;

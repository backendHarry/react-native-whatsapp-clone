import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, CONSTANTS } from "../theme/index";

const infoMessageStyle = {
  fontSize: SIZES.small,
  fontFamily: FONTS.medium,
};

const centerContainerProps = {
  marginLeft: "auto",
  marginRight: "auto",
  width: CONSTANTS.width,
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  body: {
    flexGrow: 1,
  },
  centerContainer: {
    ...centerContainerProps,
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
  borderDivider: {
    borderTopColor: COLORS.grayBorder,
    borderTopWidth: 1,
  },
  conversationContainer: {
    marginTop: 15,
    borderColor: COLORS.grayBorder,
    borderTopWidth: 1,
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 10,
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

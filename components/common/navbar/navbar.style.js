import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS, FONTS, SIZES } from "../../../theme/index";

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "transparent",
    opacity: 1,
    height: CONSTANTS.navBarHeight,
  },
  navBarContainer: {
    width: CONSTANTS.navBarWidth,
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  navBarItem: {
    alignItems: "center",
    flexDirection: "column",
  },
  navBarIconDescr: {
    fontFamily: FONTS.light,
    fontSize: SIZES.small - 1,
    marginTop: 2,
  },
  navBarIcon: {
    position: "relative",
  },
  indicator: {
    width: 7,
    height: 7,
    backgroundColor: COLORS.bluePrimary,
    borderRadius: 50,
    position: "absolute",
    right: 2,
    top: 3,
  },
  messageStatusIndicator: {
    position: "absolute",
    backgroundColor: "red",
    right: -6,
    top: -3,
    borderRadius: 50,
  },
  messagesStatus: {
    fontSize: SIZES.medium - 2,
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 5,
    paddingVertical: 0.3,
  },
});

export default styles;

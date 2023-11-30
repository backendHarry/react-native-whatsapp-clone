import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS, FONTS, SIZES } from "../../../theme/index";

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: CONSTANTS.navBarHeight,
    width: "100%",
    overflow: "hidden",
    zIndex: 1,
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

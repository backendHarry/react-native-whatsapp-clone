import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS, FONTS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  header: {
    height: CONSTANTS.headerHeight,
    width: "100%",
    opacity: 1,
  },
  headerContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: CONSTANTS.width,
    marginTop: 35,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeftText: {
    fontFamily: FONTS.light,
    color: COLORS.bluePrimary,
    fontSize: SIZES.medium,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS, SIZES, FONTS } from "../../../../theme/index";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchFormGroup: {
    width: CONSTANTS.searchFieldWidth,
    height: 40,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: [{ translateY: -CONSTANTS.iconHeight / 2 }, { translateX: 6 }],
  },
  searchFieldInput: {
    backgroundColor: COLORS.searchGrayBackground,
    height: "100%",
    width: "100%",
    paddingLeft: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    fontSize: SIZES.medium,
    fontFamily: FONTS.light,
    color: COLORS.white,
    letterSpacing: 0.5,
    borderRadius: 7,
  },
});

export default styles;

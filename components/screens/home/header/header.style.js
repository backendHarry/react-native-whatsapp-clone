import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS, FONTS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
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

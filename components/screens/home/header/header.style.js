import { StyleSheet } from "react-native";
import { CONSTANTS, FONTS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: CONSTANTS.width,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeftText: {
    fontFamily: FONTS.light,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
    justifyContent: "space-between",
  },
});

export default styles;

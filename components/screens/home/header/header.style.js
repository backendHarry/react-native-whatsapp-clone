import { StyleSheet } from "react-native";
import { CONSTANTS, FONTS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: CONSTANTS.width,
    marginTop: 20,
  },
  headerLeftText: {
    fontFamily: FONTS.light,
  },
});

export default styles;

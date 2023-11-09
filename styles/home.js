import { StyleSheet } from "react-native";
import { COLORS } from "../theme/index";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    height: "100%",
  },
  contentContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%",
  },
});

export default styles;

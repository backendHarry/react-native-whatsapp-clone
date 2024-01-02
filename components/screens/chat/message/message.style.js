import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../../theme/index";

const styles = StyleSheet.create({
  message: {
    backgroundColor: COLORS.primary,
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: 2,
  },
  messageText: {
    color: COLORS.chatWhite,
    fontSize: SIZES.medium + 1,
    fontFamily: FONTS.light,
  },
  messageTimeAndIsRead: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginTop: 5,
  },
  messageTime: {
    fontSize: 12,
    color: COLORS.grayTime,
  },
});

export default styles;

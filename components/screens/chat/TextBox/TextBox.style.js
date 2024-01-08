import { StyleSheet } from "react-native";
import { CONSTANTS, SIZES, COLORS } from "../../../../theme/index";

const styles = StyleSheet.create({
  messageBox: {
    position: "absolute",
    backgroundColor: COLORS.messageInputBackground,
    bottom: 0,
    left: 0,
    width: "100%",
    height: CONSTANTS.textBoxHeight,
    overflow: "hidden",
    zIndex: 1,
    paddingTop: 10,
  },
  messageBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    paddingRight: 10,
  },
  messageInputContainer: {
    width: "60%",
    backgroundColor: COLORS.replyBackground,
    borderRadius: 50,
    height: 35,
    marginRight: 10,
    flexGrow: 1,
  },
  textInputStyle: {
    height: "100%",
    width: "100%",
    color: COLORS.chatWhite,
    fontSize: SIZES.medium,
    padding: 10,
  },
  textBoxContainer: {
    width: CONSTANTS.width,
    marginLeft: "auto",
    marginRight: "auto",
  },
  messageInputIconsBasedOnInteraction: (isTyping) => {
    return {
      width: !isTyping ? "20%" : "auto",
    };
  },
  messageInputIconsIfNotTyping: (isTyping) => {
    return {
      flexDirection: "row",
      width: "100%",
      display: !isTyping ? "initial" : "none",
      justifyContent: "space-between",
    };
  },
  messageInputIconWhenTyping: (isTyping) => {
    return {
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      display: isTyping ? "initial" : "none",
    };
  },
});

export default styles;

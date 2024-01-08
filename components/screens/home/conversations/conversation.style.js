import { StyleSheet } from "react-native-web";

import { CONSTANTS, COLORS, FONTS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  conversation: {
    height: 80,
  },
  conversationContainer: {
    flexDirection: "row",
    width: CONSTANTS.width,
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    alignItems: "center",
  },
  profileImageContainner: {
    width: 50,
    height: 50,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  conversationInfoAndTime: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    flex: 1,
    borderColor: COLORS.grayBorder,
    borderBottomWidth: 1,
    paddingVertical: 5,
    alignItems: "top",
  },
  conversationNameAndMessage: {
    paddingLeft: 15,
    paddingRight: 20,
    flex: 1,
  },
  conversationName: {
    color: COLORS.chatWhite,
  },
  conversationMessage: {
    fontFamily: FONTS.light,
    color: COLORS.chatGray,
    marginTop: -0.5,
  },
  messageIcon: {
    marginTop: -5.9,
  },
  timeAndMissedMessages: {
    marginLeft: "auto",
    height: "100%",
  },
  timeOfMessage: {
    fontFamily: FONTS.light,
    color: COLORS.chatGray,
  },
  missedMessages: {
    backgroundColor: COLORS.bluePrimary,
    width: "35%",
    height: "30%",
    marginLeft: "auto",
    marginTop: 5,
    borderRadius: 40,
  },
  missedMessagesText: {
    color: COLORS.background,
    textAlign: "center",
  },
});

export default styles;

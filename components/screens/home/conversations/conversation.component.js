import { View, Image } from "react-native";

import Text from "../../../config/Text";

import styles from "./conversation.style";

// test
import dummyProfilePicture from "../../../../assets/images/profile.jpeg";

import { DoubleMessage } from "../../../../assets/icons/index";

import { CONSTANTS, COLORS } from "../../../../theme/index";

const Conversation = ({ item }) => {
  const {
    conversationProfileImage,
    conversationName,
    conversationLastMessage,
    conversationLastTime,
    conversationMissedMessages,
  } = item;
  return (
    <View style={styles.conversation}>
      <View style={styles.conversationContainer}>
        <View style={styles.profileImageContainner}>
          <Image
            source={conversationProfileImage}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.conversationInfoAndTime}>
          <View style={styles.conversationNameAndMessage}>
            <Text style={styles.conversationName} numberOfLines={1}>
              {conversationName}
            </Text>
            <Text style={styles.conversationMessage} numberOfLines={2}>
              <View style={styles.messageIcon}>
                <DoubleMessage
                  height={CONSTANTS.iconHeight}
                  width={CONSTANTS.iconWidth}
                  fill={COLORS.grayIcon}
                />
              </View>
              {conversationLastMessage}
            </Text>
          </View>
          <View style={styles.timeAndMissedMessages}>
            <Text style={styles.timeOfMessage}>{conversationLastTime}</Text>
            {conversationMissedMessages > 0 && (
              <View style={styles.missedMessages}>
                <Text style={styles.missedMessagesText}>
                  {conversationMissedMessages}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Conversation;

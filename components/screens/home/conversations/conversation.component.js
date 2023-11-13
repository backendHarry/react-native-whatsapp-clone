import { View, Image } from "react-native";

import Text from "../../../config/Text";

import styles from "./conversation.style";

// test
import dummyProfilePicture from "../../../../assets/images/profile.jpeg";

import { DoubleMessage } from "../../../../assets/icons/index";

import { CONSTANTS, COLORS } from "../../../../theme/index";

const Conversation = () => {
  return (
    <View style={styles.conversation}>
      <View style={styles.conversationContainer}>
        <View style={styles.profileImageContainner}>
          <Image source={dummyProfilePicture} style={styles.profileImage} />
        </View>
        <View style={styles.conversationInfoAndTime}>
          <View style={styles.conversationNameAndMessage}>
            <Text style={styles.conversationName} numberOfLines={1}>
              Smallie
            </Text>
            <Text style={styles.conversationMessage} numberOfLines={2}>
              <View style={styles.messageIcon}>
                <DoubleMessage
                  height={CONSTANTS.iconHeight}
                  width={CONSTANTS.iconWidth}
                  fill={COLORS.grayIcon}
                />
              </View>
              😂 that's a lie, the title provides its own additional styles. The
              title and body will stack on top of each other on account of the
              literal newlines
            </Text>
          </View>
          <View style={styles.timeAndMissedMessages}>
            <Text style={styles.timeOfMessage}>3:51 AM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Conversation;

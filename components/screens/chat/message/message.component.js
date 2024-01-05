import { View } from "react-native";
import Text from "../../../config/Text";

import styles from "./message.style";
import { DoubleMessage } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme/index";

const Message = ({ message, time, chatOwner, marginVertical }) => {
  return (
    <View
      style={
        chatOwner
          ? {
              ...styles.message,
              marginBottom: marginVertical,
              marginLeft: "auto",
            }
          : {
              ...styles.message,
              marginBottom: marginVertical,
              marginRight: "auto",
              backgroundColor: COLORS.replyBackground,
            }
      }
    >
      <Text style={styles.messageText}>{message}</Text>
      <View style={styles.messageTimeAndIsRead}>
        <Text style={styles.messageTime}>{time}</Text>
        <DoubleMessage
          stroke={COLORS.bluePrimary}
          height={CONSTANTS.iconHeight - 5}
          width={CONSTANTS.iconWidth}
          strokeWidth={1}
        />
      </View>
    </View>
  );
};

export default Message;

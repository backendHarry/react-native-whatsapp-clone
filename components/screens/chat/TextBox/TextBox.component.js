import { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Text from "../../../config/Text";
import { COLORS, CONSTANTS } from "../../../../theme/index";
import styles from "./TextBox.style";

import {
  PlusIcon,
  CameraIcon,
  VoiceRecord,
} from "../../../../assets/icons/index";

import { BlurView } from "expo-blur";

const TextBoxComponent = () => {
  const [textMessage, setTextMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (textMessage.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [textMessage]);

  return (
    <BlurView intensity={70} tint="dark" style={styles.messageBox}>
      <View style={styles.messageBoxContainer}>
        <PlusIcon
          stroke={COLORS.bluePrimary}
          height={CONSTANTS.iconHeight + 15}
          width={CONSTANTS.iconWidth + 20}
          strokeWidth={1.25}
        />
        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.textInputStyle}
            value={textMessage}
            onChangeText={setTextMessage}
          />
        </View>
        <View style={{ width: !isTyping ? "20%" : "auto" }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              display: !isTyping ? "initial" : "none",
              justifyContent: "space-between",
            }}
          >
            <CameraIcon
              stroke={COLORS.bluePrimary}
              height={CONSTANTS.iconHeight + 5}
              width={CONSTANTS.iconWidth + 10}
              strokeWidth={1.5}
            />
            <VoiceRecord
              stroke={COLORS.bluePrimary}
              height={CONSTANTS.iconHeight + 8}
              width={CONSTANTS.iconWidth}
              strokeWidth={1}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              display: isTyping ? "initial" : "none",
            }}
          >
            <VoiceRecord
              stroke={COLORS.bluePrimary}
              height={CONSTANTS.iconHeight + 8}
              width={CONSTANTS.iconWidth}
              strokeWidth={1}
            />
          </View>
        </View>
      </View>
    </BlurView>
  );
};

export default TextBoxComponent;

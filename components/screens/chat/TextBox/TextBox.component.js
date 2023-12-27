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
          <TextInput style={styles.textInputStyle} />
        </View>
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
    </BlurView>
  );
};

export default TextBoxComponent;

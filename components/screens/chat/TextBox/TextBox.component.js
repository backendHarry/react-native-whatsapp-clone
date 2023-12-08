import { View, TextInput } from "react-native";
import Text from "../../../config/Text";
import { COLORS, CONSTANTS } from "../../../../theme/index";
import styles from "./TextBox.style";

import {
  PlusIcon,
  CameraIcon,
  VoiceRecord,
} from "../../../../assets/icons/index";

const TextBoxComponent = () => {
  return (
    <View style={styles.textBox}>
      <View style={styles.textBoxContainer}>
        <PlusIcon
          stroke={COLORS.bluePrimary}
          height={CONSTANTS.iconHeight + 20}
          width={CONSTANTS.iconWidth + 20}
          strokeWidth={1.5}
        />
        <View>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

export default TextBoxComponent;

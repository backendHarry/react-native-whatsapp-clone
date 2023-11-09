import { View } from "react-native";
import Text from "../../../config/Text";
import styles from "./header.style";
import { CameraIcon } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme/index";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerLeftText}>Edit</Text>
      </View>
      <View style={styles.headerRight}>
        <CameraIcon
          stroke={COLORS.bluePrimary}
          height={CONSTANTS.iconHeight}
          width={CONSTANTS.iconWidth}
        />
        <ContactIcon
          stroke={COLORS.bluePrimary}
          height={CONSTANTS.iconHeight}
          width={CONSTANTS.iconWidth}
        />
      </View>
    </View>
  );
};

export default Header;

import { View } from "react-native";
import Text from "../../../config/Text";
import styles from "./header.style";
import { CameraIcon } from "../../../../assets/icons/index";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerLeftText}>Edit</Text>
      </View>
      <View style={styles.headerRight}>
        <CameraIcon />
        <ContactIcon />
      </View>
    </View>
  );
};

export default Header;

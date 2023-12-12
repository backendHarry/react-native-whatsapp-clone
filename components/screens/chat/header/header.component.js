import { View, Image } from "react-native";
import Text from "../../../config/Text";
import styles from "./header.style";
import { BlurView } from "expo-blur";

import { LeftIcon, VideoCall, CallIcon } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme";

import TestImage from "../../../../assets/images/profile.jpeg";

const Header = () => {
  return (
    <BlurView intensity={40} style={styles.chatHeader}>
      <View style={styles.chatHeaderContainer}>
        <View style={styles.chatHeaderLeft}>
          <View style={styles.leftIcon}>
            <LeftIcon
              stroke={COLORS.bluePrimary}
              height={CONSTANTS.iconHeight + 10}
              width={CONSTANTS.iconWidth + 10}
              strokeWidth={2.5}
            />
            <Text style={styles.numberOfMessages}>7</Text>
          </View>
          <View style={styles.profileImageAndName}>
            <View style={styles.profileImageContainer}>
              <Image source={TestImage} style={styles.profileImage} />
            </View>
            <Text style={styles.profileName}>Smallie</Text>
          </View>
        </View>
        <View style={styles.chatHeaderRight}>
          <VideoCall
            stroke={COLORS.grayIcon}
            height={CONSTANTS.iconHeight + 10}
            width={CONSTANTS.iconWidth + 10}
          />
          <CallIcon
            stroke={COLORS.grayIcon}
            height={CONSTANTS.iconHeight + 12}
            width={CONSTANTS.iconWidth + 5}
          />
        </View>
      </View>
    </BlurView>
  );
};

export default Header;

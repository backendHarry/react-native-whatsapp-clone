import { View, Image, TouchableWithoutFeedback } from "react-native";
import Text from "../../../config/Text";
import styles from "./header.style";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";

import { LeftIcon, VideoCall, CallIcon } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme";

import TestImage from "../../../../assets/images/profile.jpeg";

const Header = () => {
  const router = useRouter();

  return (
    <BlurView intensity={80} style={styles.chatHeader}>
      <View style={styles.chatHeaderContainer}>
        <View style={styles.chatHeaderLeft}>
          <TouchableWithoutFeedback
            style={styles.leftIcon}
            onPress={() => router.back()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LeftIcon
                stroke={COLORS.bluePrimary}
                height={CONSTANTS.iconHeight + 5}
                width={CONSTANTS.iconWidth + 10}
                strokeWidth={1.5}
              />
              <Text style={styles.numberOfMessages}>7</Text>
            </View>
          </TouchableWithoutFeedback>
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
            height={CONSTANTS.iconHeight + 5}
            width={CONSTANTS.iconWidth + 5}
          />
          <CallIcon
            stroke={COLORS.grayIcon}
            height={CONSTANTS.iconHeight + 5}
            width={CONSTANTS.iconWidth}
          />
        </View>
      </View>
    </BlurView>
  );
};

export default Header;

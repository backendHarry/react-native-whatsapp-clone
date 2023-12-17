import React, { useRef } from "react";
import { View, Animated } from "react-native";
import Text from "../../../config/Text";
import styles from "./header.style";
import { CameraIcon } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme/index";
import { BlurView } from "expo-blur";

const Header = ({ isHeaderScrolledPast, opacityAnimStyle }) => {
  return (
    <BlurView
      intensity={isHeaderScrolledPast ? 70 : 0}
      tint="dark"
      style={styles.header}
    >
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLeftText}>Edit</Text>
        </View>
        <Animated.View style={opacityAnimStyle}>
          <Text>Chat</Text>
        </Animated.View>
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
    </BlurView>
  );
};

export default Header;

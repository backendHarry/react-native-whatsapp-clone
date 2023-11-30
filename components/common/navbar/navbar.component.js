import { View } from "react-native";

import Text from "../../config/Text";

import styles from "./navbar.style";

import { BlurView } from "expo-blur";

// icons
import {
  ViewStatus,
  CallIcon,
  CommunityIcon,
  ChatIcon,
  UserProfile,
} from "../../../assets/icons/index";

import { COLORS, CONSTANTS } from "../../../theme/index";

const EXTRAWIDTH = 3;
const EXTRAHEIGHT = 3;

const NavBar = ({ isBottomScrolled }) => {
  return (
    <BlurView
      intensity={isBottomScrolled ? 0 : 70}
      tint="dark"
      style={styles.navBar}
    >
      <View style={styles.navBarContainer}>
        <View style={styles.navBarItem}>
          <View style={styles.navBarIcon}>
            <ViewStatus
              stroke={COLORS.grayIcon}
              height={CONSTANTS.iconHeight + EXTRAHEIGHT}
              width={CONSTANTS.iconWidth + EXTRAWIDTH}
            />
            <View style={styles.indicator}></View>
          </View>
          <Text style={styles.navBarIconDescr}>Updates</Text>
        </View>

        <View style={styles.navBarItem}>
          <View style={styles.navBarIcon}>
            <CallIcon
              stroke={COLORS.grayIcon}
              height={CONSTANTS.iconHeight + EXTRAHEIGHT}
              width={CONSTANTS.iconWidth + EXTRAWIDTH}
            />
            {/* <View style={styles.indicator}></View> */}
          </View>
          <Text style={styles.navBarIconDescr}>Calls</Text>
        </View>

        <View style={styles.navBarItem}>
          <View style={styles.navBarIcon}>
            <CommunityIcon
              stroke={COLORS.grayIcon}
              height={CONSTANTS.iconHeight + EXTRAHEIGHT}
              width={CONSTANTS.iconWidth + EXTRAWIDTH}
            />
            <View style={styles.indicator}></View>
          </View>
          <Text style={styles.navBarIconDescr}>Communities</Text>
        </View>

        <View style={styles.navBarItem}>
          <View style={styles.navBarIcon}>
            <ChatIcon
              stroke={COLORS.grayIcon}
              height={CONSTANTS.iconHeight + EXTRAHEIGHT}
              width={CONSTANTS.iconWidth + EXTRAWIDTH}
            />
            <View style={styles.messageStatusIndicator}>
              <Text style={styles.messagesStatus}>9</Text>
            </View>
          </View>
          <Text style={styles.navBarIconDescr}>Chats</Text>
        </View>

        <View style={styles.navBarItem}>
          <View style={styles.navBarIcon}>
            <UserProfile
              stroke={COLORS.grayIcon}
              height={CONSTANTS.iconHeight + EXTRAHEIGHT}
              width={CONSTANTS.iconWidth + EXTRAWIDTH}
            />
          </View>
          <Text style={styles.navBarIconDescr}>You</Text>
        </View>
      </View>
    </BlurView>
  );
};

export default NavBar;

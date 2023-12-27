import { StyleSheet } from "react-native";
import { CONSTANTS, COLORS, SIZES } from "../../../../theme/index";

const styles = StyleSheet.create({
  chatHeader: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0)",
    height: "auto",
  },
  chatHeaderContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: CONSTANTS.width,

    marginTop: 35,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatHeaderLeft: {
    flexDirection: "row",
  },
  leftIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberOfMessages: {
    color: COLORS.bluePrimary,
    fontSize: SIZES.large,
    fontWeight: 200,
  },
  profileImageContainer: {
    width: 40,
    height: 40,
  },
  profileImageAndName: {
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  profileName: {
    marginLeft: 12,
    fontSize: SIZES.medium,
  },
  chatHeaderRight: {
    flexDirection: "row",
    width: "22%",
    justifyContent: "space-between",
  },
});

export default styles;

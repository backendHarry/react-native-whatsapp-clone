import { View } from "react-native";
import Text from "../../../config/Text";

import styles from "./message.style";
import { DoubleMessage } from "../../../../assets/icons/index";
import { COLORS, CONSTANTS } from "../../../../theme/index";

const Message = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        width: "80%",
        marginLeft: "auto",
        paddingHorizontal: 10,
        borderRadius: 10,
      }}
    >
      <Text
        style={{ backgroundColor: "red", width: "100%", marginRight: "auto" }}
      >
        Everything i typed sjhshshshshshs shshshshs shshshshs shshshsh
        shshshshsh shshshshs shshshsh
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "blue",
            width: "100%",
            marginLeft: 2,
          }}
        >
          <Text>9:22 PM</Text>
          <DoubleMessage
            stroke={COLORS.bluePrimary}
            height={CONSTANTS.iconHeight}
            width={CONSTANTS.iconWidth}
            strokeWidth={1.5}
          />
        </View>
      </Text>
    </View>
  );
};

export default Message;

// height: 20,
// width: 100,
// backgroundColor: "red",
// position: "absolute",
// flex: 1,
// flexDirection: "row",
// alignItems: "center",

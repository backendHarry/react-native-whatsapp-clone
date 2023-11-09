import { Text as NativeText, StyleSheet } from "react-native";
// default styles for text
import { COLORS, FONTS, SIZES } from "../../theme/index";

export default Text = ({ children, style, ...props }) => {
  const modifiedStyle = {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    ...style,
  };

  const styles = StyleSheet.create({
    defaultTextStyle: modifiedStyle,
  });

  return (
    <NativeText style={styles.defaultTextStyle} {...props}>
      {children}
    </NativeText>
  );
};

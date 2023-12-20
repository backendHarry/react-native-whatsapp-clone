import { useState, useRef } from "react";
import {
  Animated,
  ScrollView as NativeScrollView,
  StyleSheet,
} from "react-native";

import { CONSTANTS, COLORS } from "../../theme";

export default ScrollView = ({
  children,
  scrollBarOptions = {},
  scrollFunc,
  scrollHeaderFunc,
  centerTextOpacityFunc,
  ...props
}) => {
  const scrollBarHeight = scrollBarOptions.height || CONSTANTS.scrollBarHeight;
  const scrollBarWidth = scrollBarOptions.width || CONSTANTS.scrollBarWidth;
  const scrollBarColor = scrollBarOptions.color || COLORS.searchGrayPlaceholder;

  const scrollBarStyles = StyleSheet.create({
    scrollBar: {
      width: scrollBarWidth,
      height: scrollBarHeight,
      backgroundColor: scrollBarColor,
      position: "absolute",
      top: 100,
      bottom: 100,
      zIndex: 1,
      right: 0,
      borderRadius: 10,
    },
  });

  const scrollBarPosition = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [outerScrollViewHeight, setOuterScrollViewHeight] = useState(1);
  const [innerScrollViewHeight, setInnerScrollViewHeight] = useState(1);

  const scrollIndicatorSize = scrollBarHeight;

  const scrollingSpace =
    innerScrollViewHeight > scrollIndicatorSize
      ? innerScrollViewHeight - scrollIndicatorSize
      : 1;

  const scrollBarAnimatedPosition = Animated.multiply(
    scrollBarPosition,
    innerScrollViewHeight / outerScrollViewHeight
  ).interpolate({
    extrapolate: "clamp",
    inputRange: [0, scrollingSpace],
    outputRange: [0, scrollingSpace],
  });

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <NativeScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      onContentSizeChange={(_, height) => {
        setInnerScrollViewHeight(height);
      }}
      onLayout={({ nativeEvent }) => {
        const { height: visbleHeight } = nativeEvent.layout;
        setOuterScrollViewHeight(visbleHeight);
      }}
      onScroll={({ nativeEvent }) => {
        scrollFunc(nativeEvent);
        scrollHeaderFunc(nativeEvent);
        scrollBarPosition.setValue(nativeEvent.contentOffset.y);
        centerTextOpacityFunc(nativeEvent);
      }}
      onScrollBeginDrag={fadeIn}
      onScrollEndDrag={fadeOut}
      scrollEventThrottle={8}
      {...props}
    >
      <Animated.View
        style={[
          scrollBarStyles.scrollBar,
          {
            opacity: fadeAnim,
            transform: [{ translateY: scrollBarAnimatedPosition }],
          },
        ]}
      />
      {children}
    </NativeScrollView>
  );
};

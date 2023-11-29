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
      zIndex: 1,
      right: 0,
      borderRadius: 10,
    },
  });

  const scrollIndicator = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [scrollViewContentHeight, setScrollViewContentHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollVisibleHeight] = useState(0);

  const scrollIndicatorSize = scrollBarHeight;

  const scrollDifference =
    scrollViewVisibleHeight > scrollIndicatorSize
      ? scrollViewVisibleHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    scrollViewVisibleHeight / scrollViewContentHeight
  ).interpolate({
    extrapolateRight: "clamp",
    inputRange: [0, scrollDifference],
    outputRange: [0, scrollDifference],
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
        setScrollVisibleHeight(height);
      }}
      onLayout={({ nativeEvent }) => {
        const { height: visbleHeight } = nativeEvent.layout;
        setScrollViewContentHeight(visbleHeight);
      }}
      onScroll={({ nativeEvent }) => {
        scrollFunc(nativeEvent);
        scrollIndicator.setValue(nativeEvent.contentOffset.y);
      }}
      onScrollBeginDrag={fadeIn}
      onScrollEndDrag={fadeOut}
      scrollEventThrottle={16}
      {...props}
    >
      <Animated.View
        style={[
          scrollBarStyles.scrollBar,
          {
            opacity: fadeAnim,
            transform: [{ translateY: scrollIndicatorPosition }],
          },
        ]}
      />
      {children}
    </NativeScrollView>
  );
};

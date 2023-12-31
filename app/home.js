import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  VirtualizedList,
  TouchableHighlight,
  Animated,
  Keyboard,
} from "react-native";
import { Link, router, Stack } from "expo-router";

import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// styles
import styles from "../styles/home";
import { COLORS } from "../theme/index";

// global/config component
import Text from "../components/config/Text";
import ScrollView from "../components/config/ScrollView";

// components
import Header from "../components/screens/home/header/header.component";
import Search from "../components/screens/home/search/search.component";
import Conversation from "../components/screens/home/conversations/conversation.component";

import NavBar from "../components/common/navbar/navbar.component";

// dummy data
import Conversations from "../data/conversation/index";

const Home = () => {
  // fetch single time for virtualized list
  const getItem = (data, index) => {
    return data[index];
  };

  const openChat = () => {
    router.push({ pathname: "/chat/[id]", params: { id: "123" } });
  };

  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);

  const isUserScrolledToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const isUserScrolledPastHeader = ({ contentOffset }) => {
    return contentOffset.y > 45;
  };

  // center text opacity feature
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const opacityAnimStyle = { opacity: opacityAnim };

  const textFadeIn = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const textFadeOut = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const runTextAnimation = (nativeEvent) => {
    const offSet = nativeEvent.contentOffset.y;
    if (offSet > 45) {
      textFadeIn();
    } else {
      textFadeOut();
    }
  };
  // end opacity animation

  const scrollBottomFunction = (nativeEvent) => {
    if (isUserScrolledToBottom(nativeEvent)) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };

  const scrollHeaderFunc = (nativeEvent) => {
    if (isUserScrolledPastHeader(nativeEvent)) {
      return setIsScrolledPastHeader(true);
    }
    return setIsScrolledPastHeader(false);
  };

  const scrollFunction = (nativeEvent) => {
    scrollBottomFunction(nativeEvent);
    scrollHeaderFunc(nativeEvent);
    runTextAnimation(nativeEvent);
  };

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider style={styles.app}>
      <Stack.Screen
        options={{
          header: () => {
            return null;
          },
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.body}>
          <ScrollView scrollPropertiesFunction={scrollFunction}>
            <SafeAreaView
              style={{
                paddingTop: insets.top + 10,
                paddingBottom: insets.bottom + 30,
              }}
            >
              <View style={styles.chatOptions}>
                <View style={styles.chatHeaderTextView}>
                  <Text style={styles.chatHeaderText}>Chats</Text>
                </View>
                <Search />
              </View>

              <VirtualizedList
                data={Conversations}
                renderItem={({ item }) => {
                  return (
                    <TouchableHighlight
                      delayPressIn={100}
                      delayPressOut={500}
                      underlayColor={COLORS.grayPrimary}
                      onPress={openChat}
                    >
                      <Conversation item={item} />
                    </TouchableHighlight>
                  );
                }}
                initialNumToRender={6}
                getItemCount={(data) => data.length}
                getItem={getItem}
                scrollEnabled={false}
              />

              <View style={styles.info}>
                <Text style={styles.infoMessage}>
                  Your personal messages are
                </Text>
                <Text style={styles.infoMessageHighlight}>
                  end-to-end encypted
                </Text>
              </View>
            </SafeAreaView>
          </ScrollView>
        </View>

        <StatusBar style="light" />
      </KeyboardAvoidingView>

      {/* blurview component only works after a flatlist, scrollview or e.t.c of such components */}
      <Header
        isHeaderScrolledPast={isScrolledPastHeader}
        opacityAnimStyle={opacityAnimStyle}
      />
      <NavBar isBottomScrolled={isScrolledToBottom} />
    </SafeAreaProvider>
  );
};

export default Home;

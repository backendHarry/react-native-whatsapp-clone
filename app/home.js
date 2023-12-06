import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  VirtualizedList,
  TouchableHighlight,
  Animated,
} from "react-native";
import { Link, Stack } from "expo-router";

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

import { BlurView } from "expo-blur";

const Home = () => {
  // fetch single time for virtualized list
  const getItem = (data, index) => {
    return data[index];
  };

  const openChat = () => {
    console.log("hello world");
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

  return (
    <SafeAreaView style={styles.app}>
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
          <ScrollView
            scrollFunc={(nativeEvent) => {
              if (isUserScrolledToBottom(nativeEvent)) {
                return setIsScrolledToBottom(true);
              }
              return setIsScrolledToBottom(false);
            }}
            scrollHeaderFunc={(nativeEvent) => {
              if (isUserScrolledPastHeader(nativeEvent)) {
                return setIsScrolledPastHeader(true);
              }

              return setIsScrolledPastHeader(false);
            }}
            centerTextOpacityFunc={runTextAnimation}
          >
            <View style={styles.centerContainer}>
              <View style={styles.chatHeaderTextView}>
                <Text style={styles.chatHeaderText}>Chats</Text>
              </View>
              <Search />
              <View style={styles.chatOptions}>
                <Text style={styles.chatOptionText}>Broadcast Lists</Text>
                <Text style={styles.chatOptionText}>New Group</Text>
              </View>
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
              style={styles.borderDivider}
            />

            <View style={styles.info}>
              <Text style={styles.infoMessage}>Your personal messages are</Text>
              <Text style={styles.infoMessageHighlight}>
                end-to-end encypted
              </Text>
            </View>
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
    </SafeAreaView>
  );
};

export default Home;

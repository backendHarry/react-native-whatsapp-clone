import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  VirtualizedList,
} from "react-native";
import { Link, Stack } from "expo-router";

// styles
import styles from "../styles/home";

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
  const getItem = (data, index) => {
    return data[index];
  };

  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <Stack.Screen
            options={{
              header: () => {
                return null;
              },
            }}
          />

          <View style={styles.centerContainer}>
            <Header />
          </View>

          <ScrollView>
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
                return <Conversation item={item} />;
              }}
              initialNumToRender={6}
              getItemCount={(data) => data.length}
              getItem={getItem}
              scrollEnabled={false}
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
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;

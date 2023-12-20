import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

const Test = () => {
  const [offSet, setOffset] = useState(0);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{ height: "50%", backgroundColor: "red" }}
        style={{ backgroundColor: "blue", height: "100%" }}
        onScroll={({ nativeEvent }) => {
          const {
            contentInset,
            contentSize,
            contentOffset,
            layoutMeasurement,
          } = nativeEvent;
        }}
        onContentSizeChange={(width, height) => {
          // console.log("width>>>", width);
          // console.log("height>>>", height);
        }}
        onLayout={({ nativeEvent }) => {
          // console.log("layout", nativeEvent.layout.height);
        }}
        scrollEventThrottle={16}
      >
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>
        <Text>Hello test</Text>

        <View style={{ marginTop: offSet }}>
          <Text>Testing if it'll work</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Test;

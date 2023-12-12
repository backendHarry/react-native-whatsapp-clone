/**
 *
 * This is my first time building a react native app, hence the folder and file. They are not part of the app but rather part of the building process as this file contains a try and error before building the features of the app.
 *
 * Do we to learn from the documentation and experience if needed, PS please these codes are not solid proof,they're just thoughts to try out by me!
 *
 * Arigato
 */

const Chat = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          backgroundColor: "red",
          width: "100%",
          height: "10%",
        }}
      >
        <View style={{ position: "absolute", top: "50%" }}>
          <Text>Hello world</Text>
        </View>
      </View>
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
        <Stack.Screen
          options={{
            header: () => {
              return null;
            },
          }}
        />

        <View style={{ backgroundColor: "blue", height: "80%", flexGrow: 1 }}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text>Scroll Text</Text>
            <Text>Scroll Text</Text>
            <Text>Scroll Text</Text>
            <Text>Scroll Text</Text>
            <Text>Scroll Text</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View
        style={{
          height: "10%",
          width: "100%",
          backgroundColor: "green",
        }}
      >
        <TextInput
          placeholder="Enter Text here"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <StatusBar />
    </KeyboardAvoidingView>
  );
};

export default Chat;

/**
   * observations:::
   *
   * remember to start from top to bottom when assigning heights and e.t.c
   *
   *
   * To make the last component take the whole of the bottom space (more like navbar and where to text, e.t.c) we must give the component holding that mini component a height of 100%, this means it'll want to take the whole height of the whole screen. But, it'll definitely not happen tho, because we will have components above it.. so what will literally then happen will be, it'll give the 100% to the remaining height after those from the top have had their shares of height provided the top component does not take height of 100% (meaning they wont be any space for the bottom component to use).
   *
   *
   *So first thing first, break the whole app page into sections vertically from start to top.
  
  
   * One thing to majorly know and notice is when using "safeareaview", we make the interface stay around some boundary from top and bottom. Hence, this does not make the header and navbar we want a fitting, this is because every component and design within this safeareaview will start from that boundary (header) and also bottom bounary.
  
   Hence, to achieve the header and nav bar we want, we have to create these views outside the safeareview.
  
  within the safeAreaView, we wont get the safeareaview an height prop actually, the view is just to avoid the status bar and the ios design from the bottom. What we will do instead is manipulate a view inside of this view.
  
  Next will be to partition the components to how we want to. The header can have an height of 15%, the navbar 15%, while the main body view will have 80%
  
  
  Next will be on the KeyboardAviodingView
  
  The KeyAvoidingView should be the major View for it to function properly and not that, it should have the behaviour prop
  
   */

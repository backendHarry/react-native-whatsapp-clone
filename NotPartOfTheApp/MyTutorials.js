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
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <Stack.Screen
          options={{
            header: () => {
              return null;
            },
          }}
        />

        <View style={{ backgroundColor: "blue", height: "80%", flexGrow: 1 }}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <SafeAreaView>
              <Text>Scroll Text</Text>
              <Text>Scroll Text</Text>
              <Text>Scroll Text</Text>
              <Text>Scroll Text</Text>
              <Text>Scroll Text</Text>
            </SafeAreaView>
          </ScrollView>
        </View>
      </View>
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

  Next will be on the edge from the SafeAreaView...

  To do this,first thing first is to avoid the SafeAreaView from react-native, except it's just for a small project. More better library to use is the react-native-safe-area-context.

  To use this, first thing first, the SafeAreaProvider must be the top most Component in our App. 

  <SafeAreaProvider>
  ....
  </SafeAreaProvider>

  then we do not wrap our app with the SafeAreaView because this view gives a padding to the top and bottom of the component it wraps, and wrapping the up most component after the main component will mean we are wrapping our app which will indirectly mean we are adding padding top and padding bottom to our app which will add spaces to the top and bottom of the app.


  So what we do is, provide a view which we can treat as our "body", with styles, e.t.c and in that body if we have components, we can apply the SafeAreaView to those components, which will be inside this "body" view or after the view, we can apply the safeareaview and include all our components there.

  Check the code above to understand more better, the line with SafeAreaView.
  
   */

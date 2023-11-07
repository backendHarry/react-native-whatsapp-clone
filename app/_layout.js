import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    HNBlack: require("../assets/fonts/HelveticaNeue-Black.ttf"),
    HNBold: require("../assets/fonts/HelveticaNeue-Bold.ttf"),
    HNLight: require("../assets/fonts/HelveticaNeue-Light.ttf"),
    HNMedium: require("../assets/fonts/HelveticaNeue-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;

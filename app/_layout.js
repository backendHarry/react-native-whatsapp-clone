import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    HNBlack: require("../assets/fonts/HelveticaNeue-Black.ttf"),
    HNBold: require("../assets/fonts/HelveticaNeue-Bold.ttf"),
    HNLight: require("../assets/fonts/HelveticaNeue-Light.ttf"),
    HNMedium: require("../assets/fonts/HelveticaNeue-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;

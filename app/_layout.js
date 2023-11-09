import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    HNBlack: require("../assets/fonts/HelveticaNeue-Black.ttf"),
    HNBold: require("../assets/fonts/HelveticaNeue-Bold.ttf"),
    HNLight: require("../assets/fonts/HelveticaNeue-Light.ttf"),
    HNMedium: require("../assets/fonts/HelveticaNeue-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack initialRouteName="home" onLayout={onLayoutRootView}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;

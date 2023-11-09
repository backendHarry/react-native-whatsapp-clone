import { useRootNavigationState, Redirect } from "expo-router";

export default Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href="/home" />;
};

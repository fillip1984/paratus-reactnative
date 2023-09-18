import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Text, View } from "react-native";

const FlexView = styled(View);

export default function App() {
  return (
    <FlexView className="flex flex-1 items-center justify-end">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </FlexView>
  );
}

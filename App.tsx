import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex h-screen w-screen flex-1 items-center justify-center">
      <Text className="text-2xl">Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

import HelloWorld from "@/components/HelloWorld";
import { View } from "react-native";
import "../global.css"
import { Text } from "react-native";

export default function Index() {
  return (
    <View className="bg-blue-500 flex-1 justify-center items-center  ">
      <Text className=" text-3xl font-bold text-white"></Text>
      <HelloWorld></HelloWorld>
    </View>
  );
}

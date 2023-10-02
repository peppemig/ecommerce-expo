import { View, Text } from "react-native";

export default function ProfileSection({ title }: { title: string }) {
  return (
    <View style={{ backgroundColor: "lightgray" }}>
      <Text style={{ padding: 10, fontSize: 14 }}>{title}</Text>
    </View>
  );
}

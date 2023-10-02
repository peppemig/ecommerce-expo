import { Pressable, Text } from "react-native";

export default function PreferenceButton({ label }: { label: string }) {
  return (
    <Pressable
      style={{
        borderWidth: 1,
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <Text>{label}</Text>
    </Pressable>
  );
}

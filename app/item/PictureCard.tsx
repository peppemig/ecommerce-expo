import { View, Text } from "react-native";

type PictureCardProps = {
  index: number;
};

export default function PictureCard({ index }: PictureCardProps) {
  return (
    <View
      style={[
        { backgroundColor: "red" },
        index === 0 ? { flex: 2 } : { flex: 1 / 2 },
      ]}
    >
      <Text>Test</Text>
    </View>
  );
}

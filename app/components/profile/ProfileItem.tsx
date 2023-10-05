import { Text, View, Pressable } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export enum IconType {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
}

type ProfileItemProps = {
  label: string;
  icon: {
    value:
      | { type: IconType.Feather; name: keyof typeof Feather.glyphMap }
      | { type: IconType.Ionicons; name: keyof typeof Ionicons.glyphMap }
      | {
          type: IconType.MaterialCommunityIcons;
          name: keyof typeof MaterialCommunityIcons.glyphMap;
        };
    size: number;
    color: string;
  };
};

export default function ProfileItem({ label, icon }: ProfileItemProps) {
  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        {icon.value.type === IconType.Feather && (
          <Feather name={icon.value.name} size={icon.size} color={icon.color} />
        )}
        {icon.value.type === IconType.Ionicons && (
          <Ionicons
            name={icon.value.name}
            size={icon.size}
            color={icon.color}
          />
        )}
        {icon.value.type === IconType.MaterialCommunityIcons && (
          <MaterialCommunityIcons
            name={icon.value.name}
            size={icon.size}
            color={icon.color}
          />
        )}
        <Text style={{ fontSize: 16 }}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </Pressable>
  );
}

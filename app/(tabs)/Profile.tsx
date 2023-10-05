import { SafeAreaView, ScrollView, View } from "react-native";
import ProfileItem from "../components/profile/ProfileItem";
import ProfileSection from "../components/profile/ProfileSection";
import ProfileItemSeparator from "../components/profile/ProfileItemSeparator";
import PreferenceButton from "../components/profile/PreferenceButton";

export enum IconType {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
}

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <ProfileSection title="Homepage preferences" />
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <PreferenceButton label="Men" />
          <PreferenceButton label="Women" />
          <PreferenceButton label="Kids" />
        </View>
        <ProfileSection title="Overview" />
        <ProfileItem
          label="Orders"
          icon={{
            value: { type: IconType.Feather, name: "package" },
            size: 24,
            color: "black",
          }}
        />
        <ProfileItemSeparator />
        <ProfileItem
          label="Returns"
          icon={{
            value: { type: IconType.Ionicons, name: "return-up-back" },
            size: 24,
            color: "black",
          }}
        />
        <ProfileItemSeparator />
        <ProfileItem
          label="Personal info"
          icon={{
            value: { type: IconType.Feather, name: "user" },
            size: 24,
            color: "black",
          }}
        />
        <ProfileItemSeparator />
        <ProfileItem
          label="Settings"
          icon={{
            value: { type: IconType.Feather, name: "settings" },
            size: 24,
            color: "black",
          }}
        />
        <ProfileSection title="Purchased previously" />
        <ProfileItem
          label="Clothing"
          icon={{
            value: { type: IconType.Ionicons, name: "shirt-outline" },
            size: 24,
            color: "black",
          }}
        />
        <ProfileItemSeparator />
        <ProfileItem
          label="Beauty"
          icon={{
            value: {
              type: IconType.MaterialCommunityIcons,
              name: "face-woman-shimmer-outline",
            },
            size: 24,
            color: "black",
          }}
        />
        <ProfileSection title="Customize" />
        <ProfileItem
          label="Your sizes"
          icon={{
            value: {
              type: IconType.MaterialCommunityIcons,
              name: "human-male-height-variant",
            },
            size: 24,
            color: "black",
          }}
        />
        <ProfileItemSeparator />
        <ProfileItem
          label="Your brands"
          icon={{
            value: {
              type: IconType.MaterialCommunityIcons,
              name: "label",
            },
            size: 24,
            color: "black",
          }}
        />
        <ProfileItemSeparator />
        <ProfileItem
          label="Your creators"
          icon={{
            value: {
              type: IconType.Feather,
              name: "users",
            },
            size: 24,
            color: "black",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

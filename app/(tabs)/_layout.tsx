import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-home-sharp" size={24} color="black" />
            ) : (
              <Ionicons name="md-home-outline" size={24} color="black" />
            ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="cart" size={24} color="black" />
            ) : (
              <Ionicons name="cart-outline" size={24} color="black" />
            ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="heart" size={24} color="black" />
            ) : (
              <Ionicons name="heart-outline" size={24} color="black" />
            ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

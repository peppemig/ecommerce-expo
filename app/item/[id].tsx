import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ITEM = {
  id: 1,
  title: "Item name",
  brand: "Item brand",
  price: 110,
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Red", "Yellow", "White"],
};

export default function ItemPage() {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          title: ITEM.title,
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerShadowVisible: false,
          headerRight: () => <Ionicons name="cart" size={26} color="black" />,
        }}
      />
      <Image
        source={require("../../assets/images/home-img.webp")}
        style={{
          width: "100%",
          marginBottom: 10,
          height: 300,
          borderRadius: 10,
        }}
      />

      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          height: 120,
        }}
      >
        <Image
          source={require("../../assets/images/home-img.webp")}
          style={{
            flex: 1 / 2,
            marginRight: 5,
            borderRadius: 10,
            height: "100%",
          }}
        />
        <Image
          source={require("../../assets/images/home-img.webp")}
          style={{
            flex: 1 / 2,
            marginLeft: 5,
            borderRadius: 10,
            height: "100%",
          }}
        />
      </View>
      <View style={{ gap: 5, paddingTop: 10 }}>
        <Text style={{ fontWeight: "500", color: "darkgray" }}>
          {ITEM.brand}
        </Text>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>{ITEM.title}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>${ITEM.price}</Text>
        <Text style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim, urna sed commodo elementum, magna libero condimentum ipsum.
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          paddingTop: 14,
          paddingBottom: 7,
          fontWeight: "500",
        }}
      >
        Choose size
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {ITEM.sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => setSelectedSize(size)}
            style={{
              borderRadius: 1000,
              width: 35,
              height: 35,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: size === selectedSize ? "black" : "white",
              borderColor: size === selectedSize ? "black" : "lightgray",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: size === selectedSize ? "white" : "black",
              }}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text
        style={{
          fontSize: 14,
          paddingTop: 14,
          paddingBottom: 7,
          fontWeight: "500",
        }}
      >
        Choose color
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          paddingBottom: 20,
        }}
      >
        {ITEM.colors.map((color) => (
          <Pressable
            onPress={() => setSelectedColor(color)}
            key={color}
            style={{
              borderWidth: 1,
              padding: 10,
              backgroundColor: color === selectedColor ? "black" : "white",
              borderColor: color === selectedColor ? "black" : "lightgray",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: color === selectedColor ? "white" : "black",
              }}
            >
              {color}
            </Text>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          marginBottom: 40,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "black",
            alignItems: "center",
            paddingVertical: 18,
            flex: 1,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
            Add to cart
          </Text>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            borderWidth: 1,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Ionicons name="heart-outline" size={26} color="black" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

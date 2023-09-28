import { useLocalSearchParams, Stack } from "expo-router";
import { useState } from "react";
import { View, Text, Image, Pressable, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const sizes = ["S", "M", "L", "XL"];

export default function ItemPage() {
  const { id, title, price } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<string>("S");

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerShadowVisible: false,
        }}
      />
      <Image
        source={require("../../assets/images/home-img.webp")}
        style={{
          width: "100%",
          marginBottom: 10,
          height: 200,
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
            backgroundColor: "red",
            marginRight: 5,
            borderRadius: 10,
            height: "100%",
          }}
        />
        <Image
          source={require("../../assets/images/home-img.webp")}
          style={{
            flex: 1 / 2,
            backgroundColor: "red",
            marginLeft: 5,
            borderRadius: 10,
            height: "100%",
          }}
        />
      </View>
      <View style={{ gap: 5, paddingTop: 10 }}>
        <Text style={{ fontWeight: "500", color: "darkgray" }}>
          Men's collection
        </Text>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>{title}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>${price}</Text>
        <Text style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim, urna sed commodo elementum, magna libero condimentum ipsum.
        </Text>
      </View>
      <Text style={{ fontSize: 14, paddingVertical: 14 }}>Choose size</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          paddingBottom: 14,
        }}
      >
        {sizes.map((size) => (
          <Pressable
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
                fontWeight: size === selectedSize ? "500" : "300",
                fontSize: 16,
                color: size === selectedSize ? "white" : "black",
              }}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable
        style={{
          backgroundColor: "black",
          alignItems: "center",
          paddingVertical: 18,
          borderRadius: 1000,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
          Add to cart
        </Text>
      </Pressable>
    </ScrollView>
  );
}

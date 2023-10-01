import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const IMAGE = require("../../../assets/images/home-img.webp");

export default function FavItem() {
  return (
    <>
      <View style={styles.cartItemContainer}>
        <Pressable style={{ position: "absolute", top: 10, right: 5 }}>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </Pressable>
        <Pressable style={{ position: "absolute", bottom: 10, right: 5 }}>
          <Ionicons name="cart" size={26} color="black" />
        </Pressable>
        <View
          style={{
            width: "100%",
            flex: 1 / 3,
          }}
        >
          <Image
            source={IMAGE}
            style={{ height: "100%", width: "100%", borderRadius: 4 }}
          />
        </View>
        <View style={styles.rightSideContainer}>
          <Text style={styles.firstRow}>Item brand</Text>
          <Text style={styles.secondRow}>Item name</Text>
          <Text style={styles.secondRow}>$112</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <MaterialIcons name="local-shipping" size={24} color="gray" />
            <Text style={{ color: "gray" }}>Fast shipping</Text>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
    </>
  );
}

const styles = StyleSheet.create({
  cartItemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    height: 120,
    marginBottom: 10,
    position: "relative",
  },
  rightSideContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flex: 2 / 3,
    paddingHorizontal: 10,
  },
  firstRow: { color: "gray", fontWeight: "500", fontSize: 12 },
  secondRow: { fontSize: 16, fontWeight: "bold" },
  thirdRowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  qtyButton: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
  },
  fourthRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
    marginBottom: 10,
  },
});

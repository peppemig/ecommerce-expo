import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import CartItem from "../components/cart/CartItem";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: "white",
          padding: 10,
          marginBottom: 100,
        }}
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      <View style={styles.cartBottomTotalArea}>
        <View style={styles.totalContainer}>
          <View style={{ display: "flex" }}>
            <Text>Total</Text>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>$112</Text>
          </View>
          <Pressable style={styles.checkoutButton}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Checkout
            </Text>
            <Ionicons name="chevron-forward-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  cartBottomTotalArea: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    display: "flex",
    width: "100%",
  },
  checkoutButton: {
    backgroundColor: "black",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: "lightgray",
    paddingTop: 10,
  },
});

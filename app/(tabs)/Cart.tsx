import { StyleSheet, View, SafeAreaView, Text, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CartItem from "../components/cart/CartItem";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <ScrollView
        style={{
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <CartItem />
      </ScrollView>
      <View style={styles.cartBottomTotalArea}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
            borderWidth: 0,
            borderTopWidth: 1,
            borderColor: "lightgray",
            paddingTop: 10,
          }}
        >
          <View style={{ display: "flex" }}>
            <Text>Total</Text>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>$112</Text>
          </View>
          <Pressable style={styles.checkoutButton}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Checkout
            </Text>
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
  cartHeaderContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
});

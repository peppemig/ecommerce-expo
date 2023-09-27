import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

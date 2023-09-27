import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
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

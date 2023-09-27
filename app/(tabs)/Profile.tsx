import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
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

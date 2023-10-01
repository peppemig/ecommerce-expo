import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import FavItem from "../components/favorites/FavItem";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

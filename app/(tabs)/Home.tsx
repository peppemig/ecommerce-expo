import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import HomeImage from "../components/home/HomeImage";
import { useState } from "react";
import GenderMenu from "../components/home/GenderMenu";
import ItemCard from "../components/home/ItemCard";

import { DATA } from "../data/data";

export default function Home() {
  const [selectedGender, setSelectedGender] = useState<string>("Men");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeaderContainer}>
        <Ionicons name="filter" size={28} color="black" />
        <Ionicons name="search" size={28} color="black" />
      </View>
      <ScrollView>
        <Text style={styles.title}>Discover</Text>
        <HomeImage />
        <GenderMenu
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />
        <FlatList
          style={styles.list}
          numColumns={2}
          data={DATA}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item, index }) => (
            <ItemCard index={index} item={item} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchHeaderContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    margin: 10,
  },
});

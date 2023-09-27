import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import HomeImage from "../components/home/HomeImage";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeaderContainer}>
        <Ionicons name="filter" size={28} color="black" />
        <Ionicons name="search" size={28} color="black" />
      </View>
      <ScrollView>
        <Text style={styles.title}>Discover</Text>
        <HomeImage />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imageContainer: {
    backgroundColor: "red",
    height: 220,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "center",
  },
  imageText: {
    position: "absolute",
    zIndex: 1,
    bottom: 10,
    left: 10,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});

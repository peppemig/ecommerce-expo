import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeImage() {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageText}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
          New Collection
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Shop now</Text>
          <Ionicons name="arrow-forward" size={28} color="white" />
        </View>
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/home-img.webp")}
      >
        <LinearGradient
          colors={["#00000000", "#000000"]}
          style={{ height: "100%", width: "100%", opacity: 0.6 }}
        ></LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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

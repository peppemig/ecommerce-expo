import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import ProfileItem from "../components/profile/ProfileItem";
import ProfileSection from "../components/profile/ProfileSection";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileSection title="Overview" />
        <ProfileItem />
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

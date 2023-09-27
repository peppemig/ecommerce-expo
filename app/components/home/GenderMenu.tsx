import { SetStateAction } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type GenderMenuProps = {
  selectedGender: string;
  setSelectedGender: React.Dispatch<SetStateAction<string>>;
};

export default function GenderMenu({
  selectedGender,
  setSelectedGender,
}: GenderMenuProps) {
  return (
    <View style={styles.genderMenu}>
      <Pressable onPress={() => setSelectedGender("Men")}>
        <View
          style={{
            borderColor: "black",
            borderBottomWidth: selectedGender === "Men" ? 2 : 0,
          }}
        >
          <Text
            style={{
              fontWeight: selectedGender === "Men" ? "bold" : "200",
              borderBottomWidth: 10,
            }}
          >
            Men
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setSelectedGender("Women")}>
        <View
          style={{
            borderColor: "black",
            borderBottomWidth: selectedGender === "Women" ? 2 : 0,
          }}
        >
          <Text
            style={{
              fontWeight: selectedGender === "Women" ? "bold" : "200",
              borderBottomWidth: 10,
            }}
          >
            Women
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setSelectedGender("Kids")}>
        <View
          style={{
            borderColor: "black",
            borderBottomWidth: selectedGender === "Kids" ? 2 : 0,
          }}
        >
          <Text
            style={{
              fontWeight: selectedGender === "Kids" ? "bold" : "200",
              borderBottomWidth: 10,
            }}
          >
            Kids
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  genderMenu: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginLeft: 10,
    marginTop: 20,
  },
});

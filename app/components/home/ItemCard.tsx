import { Link } from "expo-router";
import { Text, Image, Pressable } from "react-native";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  sizes: string[];
  colors: string[];
};

type ItemCardProps = {
  index: number;
  item: ItemProps;
};

export default function ItemCard({ index, item }: ItemCardProps) {
  return (
    <Link
      asChild
      href={{
        pathname: "/item/[id]",
        params: {
          id: item.id,
        },
      }}
      style={[
        { flex: 1 },
        index % 2 === 0
          ? {
              marginRight: 5,
            }
          : {
              marginLeft: 5,
            },
      ]}
    >
      <Pressable>
        <Image
          source={require("../../../assets/images/home-img.webp")}
          style={{
            height: 180,
            width: "100%",
            borderRadius: 5,
            marginBottom: 5,
          }}
        />
        <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: "500" }}>
          {item.title}
        </Text>
        <Text style={{ paddingBottom: 14 }}>${item.price}</Text>
      </Pressable>
    </Link>
  );
}

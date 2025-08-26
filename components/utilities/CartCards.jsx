import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const imageUrl =
  "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp";
const CartCards = ({ item, deleteItem }) => {
  return (
    <View style={styles.containerCart}>
      <Image source={{ uri: item.images[0] }} style={styles.CartImage} />
      <View style={styles.cartContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.sizeCircleContainer}>
          <View style={[styles.circle, { backgroundColor: item.color }]} />
          <View style={styles.sizeValueContainer}>
            <Text style={[styles.sizeValue]}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItem(item)}>
        <MaterialIcons name="delete" color="#f06666ff" size={27} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCards;

const styles = StyleSheet.create({
  containerCart: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
  },
  CartImage: {
    height: 125,
    width: "25%",
    borderRightWidth: 1,
  },
  cartContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    color: "#797979",
    marginVertical: 10,
  },
  sizeCircleContainer: {
    flexDirection: "row",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 18,
  },
  sizeValueContainer: {
    height: 32,
    width: 32,
    borderRadius: 18,
    backgroundColor: "#9b9ea1ff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
});

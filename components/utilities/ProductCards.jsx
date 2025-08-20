import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductCards = ({ setIsLiked, item, isLiked }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/womenClothes2.avif")}
        style={styles.productImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>ProductCards</Text>
        <Text style={styles.price}>$29.4</Text>
      </View>
      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={styles.likeContainer}
      >
        {isLiked ? (
          <AntDesign name="heart" color="#000" size={24} />
        ) : (
          <Feather name="heart" color="#000" size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginTop:20
  },
  productImage: {
    height: 256,
    borderRadius: 20,
    width: "90%",
    marginVertical: 10,
    marginRight: 10,
  },
  content: {
    paddingLeft: 8,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "#9C9C9C",
    fontWeight: "600",
  },
  likeContainer: {
    height: 34,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 20,
    right: 25,
  },
});

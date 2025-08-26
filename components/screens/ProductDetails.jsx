import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import Header from "../utilities/Header";
import { useRoute } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";
import { useNavigation } from "expo-router";

const sizes = ["S", "M", "L", "XL"];
const colors = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

const ProductDetails = () => {
  const route = useRoute();
  const item = route.params.item;
  //   console.log(route.params.item);
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View style={styles.productDetails}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Image source={{ uri: item.images[0] }} style={styles.coverImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={[styles.price, styles.title]}>${item.price}</Text>
          </View>
          {/* Size container */}
          <Text style={[styles.sizeTxt, styles.title]}>Size</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((item) => {
              return (
                <TouchableOpacity
                  key={item}
                  style={styles.sizeValueContainer}
                  onPress={() => setSelectedSize(item)}
                >
                  <Text
                    style={[
                      styles.sizeValue,
                      selectedSize === item && { color: "#E55B5B" },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={[styles.title, styles.colorTxt]}>Colors</Text>
          <View style={styles.sizeContainer}>
            {colors.map((color) => {
              return (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.circleBorder,
                    selectedColor === color && {
                      borderColor: color,
                      borderWidth: 1,
                    },
                  ]}
                  onPress={() => setSelectedColor(color)}
                >
                  <View
                    style={[styles.circle, { backgroundColor: color }]}
                  ></View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Button Container */}
          <TouchableOpacity
            style={styles.CartBtn}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.CartTxt}>Add To Cart</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  mainConatiner: {
    backgroundColor: "#edd8d8",
    flex: 1,
  },
  productDetails: {
    padding: 20,
  },
  coverImage: {
    height: 420,
    borderRadius: 20,
    width: "100%",
    marginVertical: 10,
    marginRight: 10,
    paddingHorizontal: 0,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  title: { fontSize: 20, color: "#444444", fontWeight: "500" },
  price: { color: "#4D4C4C" },
  sizeContainer: {
    flexDirection: "row",
    // marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginVertical: 10,
  },
  circleBorder: {
    // borderWidth:1,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
  CartBtn: {
    backgroundColor: "#E96E6E",
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
  },
  CartTxt: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

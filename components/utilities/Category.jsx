import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.trendButton,
          selectedCategory === item && { backgroundColor: "#E96E6E" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  trendButton: {
    fontSize: 16,
    fontWeight: "600",
    // backgroundColor:"#E96E6E",
    backgroundColor: "#938F8F",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    // paddingVertical: 20,
    alignItems: "center",
  },
});

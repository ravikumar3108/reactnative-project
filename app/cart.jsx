import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "@/components/utilities/Header";
import CartCards from "@/components/utilities/CartCards";

const Cart = () => {
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View style={styles.homeContainer}>
        <Header isCart={true}/>
        <Text>My Cart</Text>
        <CartCards/>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainConatiner: {
    backgroundColor: "#edd8d8",
    flex: 1,
  },
  homeContainer: {
    padding: 20,
  },
});

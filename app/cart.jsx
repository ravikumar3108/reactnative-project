import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import Header from "@/components/utilities/Header";
import CartCards from "@/components/utilities/CartCards";
import { CartContext } from "@/components/context/CartContext";

const Cart = () => {
  const { carts, deleteItem, totalPrice } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View style={styles.homeContainer}>
        <Header isCart={true} />

        <FlatList
          data={carts}
          renderItem={({ item }) => (
            <CartCards item={item} deleteItem={deleteItem} />
          )}
          ListFooterComponent={
            <>
              <View style={styles.priceContainer}>
                <View style={styles.total}>
                  <Text style={styles.text}>Total:- </Text>
                  <Text style={styles.text}>${totalPrice}</Text>
                </View>
                <View style={styles.total}>
                  <Text style={styles.text}>Shipping:- </Text>
                  <Text style={styles.text}>$0.0</Text>
                </View>
              </View>

              <View style={styles.divider}></View>
              <View style={styles.total}>
                <Text style={styles.text}>Grand Total:- </Text>
                <Text
                  style={[styles.text, { color: "black", fontWeight: "700" }]}
                >
                  ${totalPrice}
                </Text>
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        />

        {/* Checkout Button  */}
        <TouchableOpacity style={styles.checkoutContatiner}>
          <Text style={styles.buttontxt}>Checkout</Text>
        </TouchableOpacity>
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
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: "#757575",
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 10,
  },
  checkoutContatiner: {
    borderColor: "#E96E6E",
  },
  buttontxt: {},
  checkoutContatiner: {
    backgroundColor: "#E96E6E",
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttontxt: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

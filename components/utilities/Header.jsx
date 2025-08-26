import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "expo-router";

const Header = ({ isCart }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.appIconContainer}
      >
        {isCart ? (
          <Ionicons name="chevron-back" color="#000" size={24} />
        ) : (
          <Image
            source={require("../../assets/images/appIcon.webp")}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart ? (
        <Text style={{ fontSize: 28, color: "black" }}>My Cart</Text>
      ) : (
        ""
      )}

      <Image
        source={require("../../assets/images/userIcon.jpg")}
        style={styles.dp}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  appIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  appIcon: {
    height: 33,
    width: 33,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});

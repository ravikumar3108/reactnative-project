import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image
          source={require("../../assets/images/appIcon.webp")}
          style={styles.appIcon}
        />
      </View>
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

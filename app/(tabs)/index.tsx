import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../../components/utilities/Header";
import Category from "../../components/utilities/Category";
import ProductCards from "../../components/utilities/ProductCards";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

const categories = ["Trending Now", "All", "New", "Mens", "Womens"];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View style={styles.homeContainer}>
        <Header />

        {/* product section  */}
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.matchText}>Match Your Style</Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  name="search"
                  color="#C0C0C0"
                  size={24}
                  style={styles.iconContainer}
                />
                <TextInput style={styles.textInput} placeholder="Search" />
              </View>
              {/* category container  */}
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <Category
                    item={item}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item, index }) => (
            <ProductCards
              item={item}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {paddingBottom:150}
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    backgroundColor: "#edd8d8",
    flex: 1,
  },
  homeContainer: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 15,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
  },
});

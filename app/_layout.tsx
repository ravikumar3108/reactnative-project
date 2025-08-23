import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "./index"
import MoreOptions from "./explore"
import Cart from "./cart"
import Account from "./account"
import ProductDetails from "../components/screens/ProductDetails"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function MyHomeStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} options={{headerShown:false}} />
      </Stack.Navigator>
    </>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="Home"
        component={MyHomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        component={MoreOptions}
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore-o" color="#000" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" color="#000" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        component={Account}
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color="#000" size={24} />
          ),
        }}
      /> 
    </Tabs.Navigator>
  );
}

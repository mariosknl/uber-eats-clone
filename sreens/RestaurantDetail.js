import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <MenuItems />
    </View>
  );
}

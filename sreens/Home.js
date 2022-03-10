import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import {} from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text } from "react-native";
import React, { useState } from "react";
import AboutRestaurant from "../components/restaurantDetail.js/AboutRestaurant";
import ViewCart from "../components/restaurantDetail.js/ViewCart";
import MenuItem from "../components/restaurantDetail.js/MenuItem";
const RestaurantDetailScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AboutRestaurant />
      <View style={{ flex: 1, position: "relative" }}>
        <MenuItem />
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;

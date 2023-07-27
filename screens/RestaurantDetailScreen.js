import { View, Text } from "react-native";
import React, { useState } from "react";
import AboutRestaurant from "../components/restaurantDetail.js/AboutRestaurant";
import MenuItem from "../components/restaurantDetail.js/MenuItem";

const RestaurantDetailScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <AboutRestaurant />
      <View style={{ flex: 1, position: "relative" }}>
        <MenuItem restaurantName={name} />
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;

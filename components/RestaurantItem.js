import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/outline";
import { ClockIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ item }) => {
  const { image_url, name, rating, price, categories, review_count } = item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="overflow-hidden flex rounded-2xl m-1 border border-gray-300"
      onPress={() =>
        navigation.navigate("RestaurantDetailScreen", {
          name: name,
          rating: rating,
          price: price,
          categories: categories,
          reviews: review_count,
        })
      }
    >
      <View>
        <RestaurantImage image={image_url} />
        <RestaurantInfo
          name={name}
          rating={rating}
          price={price}
          categories={categories}
        />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = ({ image }) => (
  <View>
    <Image
      source={{
        uri: image,
      }}
      style={{
        height: 180,
        width: "100%",
        objectFit: "cover",
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 7, top: 5 }}>
      <HeartIcon color="white" />
    </TouchableOpacity>
  </View>
);

const getEstimatedPrice = (price) => {
  // Map the price level to the corresponding representation
  switch (price) {
    case "$":
      return "$ Cheap";
    case "$$":
      return "$$ Moderate";
    case "$$$":
      return "$$$ Expensive";
    case "$$$$":
      return "$$$$ Very Expensive";
    default:
      return "Price information not available";
  }
};

const RestaurantInfo = ({ name, rating, price, categories }) => (
  <View className="p-1">
    {/* Name & Description */}
    <Text className="text-xl font-bold">{name}</Text>
    <Text className="text-gray-600">
      {categories.map((category) => category.title).join(" • ")}
    </Text>
    <Text className="text-gray-600">{getEstimatedPrice(price)}</Text>

    {/* Clock Icon */}
    <View className="flex-row gap-1 items-center">
      <ClockIcon color="green" size={19} />
      <Text className="text-gray-600">30-45 min</Text>
    </View>

    {/* Rating */}
    <View className="bg-green-600 flex-row items-center absolute right-2 top-2 rounded-md p-0.5 px-1">
      <Text className="text-white text-sm font-bold">{rating}</Text>
      <StarIcon
        color="white"
        size={12}
        style={{ marginTop: 1, marginLeft: 1 }}
      />
    </View>
  </View>
);

export default RestaurantItem;

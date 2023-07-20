import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";

//Display a 'K' instead of 1000 -> created easily by chatGPT
const formatNumber = (number) => {
  if (number < 1000) {
    return number.toString();
  } else if (number >= 1000 && number < 1000000) {
    return Math.floor(number / 1000) + "K";
  }
};

const AboutRestaurant = () => {
  const navigation = useNavigation();
  //Using route to recieve the yelpDescription dynamically over the API
  const route = useRoute();
  const { name, rating, price, categories, reviews } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const yelpDescription = `${formattedCategories} ${price ? "•" : ""} ${
    price ? price : ""
  }  •  `;

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeftIcon
          color="black"
          style={{ marginLeft: 10, marginTop: 5 }}
        />
      </TouchableOpacity>

      <View className=" border-b-4 border-slate-200 mx-2">
        <RestaurantName name={name} />
        <View className="flex-row self-center overflow-hidden flex-wrap mx-10 mb-2">
          <RestaurantDescription description={yelpDescription} />
          {/* Rating square icon*/}
          <StarRating rating={rating} />
          <NumOfReviews reviews={reviews} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const RestaurantName = (props) => (
  <Text className="text-3xl mt-5 font-bold self-center">{props.name}</Text>
);
const RestaurantDescription = (props) => (
  <Text className="self-center mb-2">{props.description}</Text>
);

const StarRating = ({ rating }) => (
  <View className="bg-green-600 flex-row items-center w-10 h-6 rounded-md p-0.5 px-1">
    <Text className="text-white text-sm font-bold">{rating}</Text>
    <StarIcon color="white" size={12} style={{ marginTop: 1, marginLeft: 1 }} />
  </View>
);

const NumOfReviews = ({ reviews }) => (
  <View className="flex-row self-center">
    <Text className="flex self-center font-semibold ml-1">
      • ({formatNumber(reviews)}+ reviews)
    </Text>
  </View>
);
export default AboutRestaurant;

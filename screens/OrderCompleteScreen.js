import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderCompleteScreen = () => {
  const navigation = useNavigation();
  const { items, restaurantName } = useSelector((state) => state.cart);

  //Return to Home screen after staying for 5 seconds here
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout completes
  }, [navigation]);

  //Subtotal price calculation
  const subtotal = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  //Restrict the price info to only two decimals after the price.
  const subtotalWithTwoDecimals = subtotal.toFixed(2);
  const subtotalAsNumber = parseFloat(subtotalWithTwoDecimals);

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text className="text-center flex-wrap text-base font-semibold">
        Your Order at <Text className="font-extrabold">{restaurantName}</Text>{" "}
        for <Text className="font-extrabold">${subtotalAsNumber}</Text> has been
        placed Successfully!
      </Text>

      <LottieView
        style={{ height: 200, alignSelf: "center" }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.7}
      />
      <LottieView
        style={{ height: 300, alignSelf: "center" }}
        source={require("../assets/animations/thankyou.json")}
        autoPlay
        speed={2}
      />
    </SafeAreaView>
  );
};

const FoodInfo = (props) => (
  <View className=" w-2/3 justify-evenly">
    <Text className="font-bold text-xl">{props.food.title}</Text>
    <Text className=" text-gray-600">{props.food.description}</Text>
    <Text className="font-bold text-lg">${props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 15 }}
    />
  </View>
);

export default OrderCompleteScreen;

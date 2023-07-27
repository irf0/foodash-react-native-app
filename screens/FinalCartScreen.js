import { View, Text, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { ChevronLeftIcon, TrashIcon } from "react-native-heroicons/solid";
import { useCreatePaymentIntentMutation } from "../redux/apiSlice";
import { useStripe } from "@stripe/stripe-react-native";

const FinalCartScreen = () => {
  const navigation = useNavigation();
  const { items, restaurantName } = useSelector((state) => state.cart);
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const stripe = useStripe();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  //Checkout button logic
  const onCheckout = async () => {
    // 1. Create a payment intent
    navigation.navigate("OrderCompleteScreen");

    //We'll do the payment integration in future someday.
    //This is just a concept so its okay.
  };

  //Subtotal price calculation
  const subtotal = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  //Restrict the price info to only two decimals after the price.
  const subtotalWithTwoDecimals = subtotal.toFixed(2);
  const subtotalAsNumber = parseFloat(subtotalWithTwoDecimals);

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView className="h-screen flex-1">
      <View className="border-b-0.5 border-gray-400 flex-row items-center ml-2">
        <ChevronLeftIcon
          onPress={() => navigation.goBack()}
          color="black"
          size={25}
        />
        <Text className="my-2 text-lg font-bold ml-20">CART SUMMARY</Text>
      </View>

      <View>
        <FlatList
          className="border-b border-gray-300"
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={keyExtractor}
          // Assuming your cart items have a unique identifier property like "id"
          renderItem={({ item }) => (
            <View key={item.id} className="w-full flex p-1.5">
              <View className="flex-row items-center gap-1 justify-between">
                <View className="flex-row gap-1 items-center">
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 65, height: 65, borderRadius: 5 }}
                  />

                  <View className="flex flex-wrap">
                    <Text className="text-xl -mt-4 font-semibold">
                      {item.title}
                    </Text>
                    <Text className="text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Text>
                  </View>
                </View>

                <View className="flex w-9 text-center border rounded-md border-gray-300">
                  <Text className="text-center align-middle font-semibold text-lg">
                    {item.quantity}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />

        {/* This is the Subtotal summary box */}
        <View className="p-2 mx-3 flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-600 font-semibold">
              No. of Items
            </Text>
            <Text className="text-lg text-gray-600 font-semibold">
              Delivery
            </Text>
            <Text className="text-lg text-gray-600 font-semibold">
              Subtotal
            </Text>
            <Text className="text-lg text-gray-600 font-semibold">Taxes</Text>
            <Text className="text-lg text-gray-900 font-bold">TOTAL </Text>
          </View>

          <View>
            <Text className="text-lg text-gray-600 font-semibold">
              {items.length} ({items.length > 1 ? "items" : "item"})
            </Text>
            <Text className="text-lg text-gray-600 font-semibold"> FREE</Text>
            <Text className="text-lg text-gray-600 font-semibold">
              ${subtotalAsNumber}
            </Text>
            <Text className="text-lg text-gray-600 font-semibold">$0</Text>
            <Text className="text-lg text-gray-900 font-bold">
              ${subtotalAsNumber}
            </Text>
          </View>
        </View>
        {/* Summary box ends here... */}
      </View>

      {/* Checkout Button */}
      <View className="absolute sm:bottom-0 bottom-2 left-8">
        <TouchableOpacity
          onPress={onCheckout}
          className="bg-red-500 p-4 rounded-md w-72 items-center"
        >
          <Text className="text-lg text-white font-semibold">
            PROCEED TO PAY ${subtotalAsNumber}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FinalCartScreen;

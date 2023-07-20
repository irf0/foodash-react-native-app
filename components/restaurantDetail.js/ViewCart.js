import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon, ShoppingBagIcon } from "react-native-heroicons/solid";

const ViewCart = ({ setModalVisible, isPressed, cartItems }) => {
  // const total = items
  //   .map((item) => Number(item.price.replace("$", "")))
  //   .reduce((prev, curr) => prev + curr, 0);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });

  return (
    <>
      <View className="absolute bottom-2 left-36 right-20">
        {isPressed && (
          <View>
            <View className="flex top-10 right-80 left-10 z-40 h-7 w-7 rounded-full bg-green-100 justify-center items-center">
              {/* Cart Qty will be shown here.  */}
              <Text className="text-lg">1</Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.9}
          className="p-4 bg-red-500 flex h-20 w-20 rounded-full justify-center items-center shadow-3xl -z-10"
        >
          <ShoppingBagIcon
            color="white"
            size={40}
            style={{ position: "relative", zIndex: 1 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ViewCart;

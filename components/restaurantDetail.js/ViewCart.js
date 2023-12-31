import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon, ShoppingBagIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";

const ViewCart = ({ setModalVisible, isPressed }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.length;

  return (
    <>
      <View className="absolute bottom-2 left-36 right-20">
        {isPressed && (
          <View>
            <View className="flex top-10 right-80 left-10 z-40 h-7 w-7 rounded-full bg-gray-200 justify-center items-center">
              {/* Cart Qty will be shown here.  */}
              <Text className="text-lg">{totalQuantity}</Text>
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

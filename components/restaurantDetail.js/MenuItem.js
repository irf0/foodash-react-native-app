import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ViewCart from "./ViewCart";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../CartModal";
import {
  addItemToCart,
  cartSlice,
  updateTotalPrice,
} from "../../redux/cartSlice";
import foodData from "../../utils/foodData";

const MenuItem = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

  //addToCart
  const handleAddToCart = (itemId) => {
    dispatch(addItemToCart(itemId));
    setIsPressed(true);
  };

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mb-16 relative"
      >
        {foodData.map((food, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View className="flex-row p-3 px-3 mt-2 mx-2 border-0.5 shadow-lg rounded-md">
              {/* <BouncyCheckbox
                fillColor="green"
                iconStyle={{ borderRadius: 4 }}
                innerIconStyle={{ borderRadius: 4 }}
               
              /> */}

              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <View key={index} className="absolute bottom-1 right-7">
              <TouchableOpacity
                activeOpacity={!isPressed ? 0.8 : 1}
                className="flex p-2 bg-red-500 rounded-md w-24 justify-center items-center"
                onPress={() => handleAddToCart(food.id)}
              >
                <Text className="text-xl font-semibold text-white">ADD</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CartModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* Shopping bag */}
      <ViewCart
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isPressed={isPressed}
      />
    </View>
  );
};

const FoodInfo = (props) => (
  <View className=" w-2/3 justify-evenly">
    <Text className="font-bold text-xl">{props.food.title}</Text>
    <Text className=" text-gray-600">{props.food.description}</Text>
    <Text className="font-bold text-lg">${props.food.price}</Text>
  </View>
);
const FoodTitle = (props) => (
  <View className=" w-2/3 justify-evenly mx-1">
    <Text className="font-bold text-xl">{props.food.title}</Text>
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

export default MenuItem;

import {
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  View,
  Modal,
} from "react-native";

import { MinusSmallIcon, PlusSmallIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllItemFromCart,
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  updateTotalPrice,
} from "../redux/cartSlice";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import LottieView from "lottie-react-native";

//Items in the cart
const CartModal = ({ modalVisible, setModalVisible }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { items, restaurantName } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  //Remove item from cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  //Clear whole cart at once
  const handleClearCart = () => {
    dispatch(clearAllItemFromCart());
  };

  //Increase quantity of each item
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity({ itemId }));
  };

  //Decrease quantity of each item
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity({ itemId }));
  };

  //Subtotal price calculation
  const subtotal = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  //Restrict the price info to only two decimals after the price.
  const subtotalWithTwoDecimals = subtotal.toFixed(2);
  const subtotalAsNumber = parseFloat(subtotalWithTwoDecimals);

  //Adding order data to firebase DB->Have to add the order to a db bcs else it will not show up in the in the next screen (Order screen)
  const addOrderToFirebase = async () => {
    if (restaurantName && items.length > 0) {
      setLoading(true);
      try {
        // Add data to Firestore only if restaurantName and items are defined
        const docRef = await addDoc(collection(db, "orders"), {
          items: items,
          restaurantName: restaurantName,
        });
        setModalVisible(false);
        navigation.navigate("FinalCartScreen");
        setLoading(false);
      } catch (error) {
        console.error("Error adding order to Firestore: ", error);
        // Handle any errors that occur during the data addition process
      }
    }
  };
  const keyExtractor = (item) => item.id.toString();
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View
        className="flex-1 justify-end"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <View className="bg-white p-5 h-4/6 rounded-t-2xl">
          {!loading ? (
            <TouchableOpacity className="flex self-center -mt-2">
              <AntDesign
                name="downcircle"
                size={26}
                color="red"
                onPress={() => setModalVisible(false)}
              />
            </TouchableOpacity>
          ) : (
            <LottieView
              style={{ height: 100, alignSelf: "center" }}
              source={require("../assets/animations/loader.json")}
              autoPlay
              speed={0.7}
              loop={true}
            />
          )}

          <View className="border-b-0.5 border-gray-400 flex-row justify-between">
            <Text className="my-2 text-lg font-bold">
              Items added in cart : {items.length}
            </Text>

            {items.length > 0 && (
              <TouchableOpacity onPress={handleClearCart}>
                <Text className="my-3 text-sm text-gray-500">Clear all</Text>
              </TouchableOpacity>
            )}
          </View>

          {items.length > 0 ? (
            <FlatList
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
                        style={{ width: 50, height: 50, borderRadius: 5 }}
                      />
                      <View className="flex flex-wrap">
                        <Text className="text-lg font-semibold">
                          {item.title}
                        </Text>
                        <Text className="text-lg font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Text>
                      </View>
                    </View>

                    {/* Qty inc/dec buttons */}
                    <View className="gap-2">
                      <View className="flex-row text-center border rounded-md border-green-700">
                        <TouchableOpacity className="flex-row justify-center">
                          <MinusSmallIcon
                            onPress={() => handleDecreaseQuantity(item.id)}
                            color="black"
                            size={20}
                            style={{
                              marginTop: 3,
                              alignItems: "center",
                            }}
                          />
                        </TouchableOpacity>

                        <Text
                          keyboardType="numeric"
                          className="text-center align-middle font-semibold text-lg"
                        >
                          {item.quantity}
                        </Text>

                        <TouchableOpacity className="flex-row justify-center">
                          <PlusSmallIcon
                            onPress={() => handleIncreaseQuantity(item.id)}
                            style={{
                              marginTop: 3,
                              alignItems: "center",
                            }}
                            color="black"
                            size={20}
                          />
                        </TouchableOpacity>
                      </View>

                      {/* Remove item from cart button */}
                      <TouchableOpacity
                        className="border bg-red-400 border-red-500 p-1 rounded-md"
                        onPress={() => handleRemoveFromCart(item.id)}
                      >
                        <Text className="font-semibold text-center">
                          Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
          ) : (
            <Text className="flex text-center my-20 font-semibold text-lg">
              You do not have any items in the cart! 😒
            </Text>
          )}
          <View className="relative bottom-0 left-5 flex">
            <Text className="text-xl font-semibold">Subtotal:</Text>
            <Text className="text-lg font-bold">${subtotalAsNumber}</Text>
          </View>
        </View>

        <View className="absolute bottom-2 right-7">
          <TouchableOpacity
            onPress={() => {
              addOrderToFirebase();
            }}
            className="flex-row p-4 w-28 items-center justify-center rounded-lg bg-red-500"
          >
            <Text className="text-white text-lg font-bold">Next</Text>

            <AntDesign name="caretright" size={23} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default CartModal;

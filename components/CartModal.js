import { ScrollView, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import {
  ChevronDownIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/solid";
import { useSelector } from "react-redux";

//Cart Modal
const CartModal = ({ modalVisible, setModalVisible }) => {
  const productsInCart = useSelector((state) => state.products.selectedProduct);

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
          <TouchableOpacity className="flex self-center -mt-2">
            <ChevronDownIcon
              color="red"
              size={30}
              onPress={() => setModalVisible(false)}
            />
          </TouchableOpacity>

          <View className="border-b-0.5 border-gray-400 flex-row justify-between">
            <Text className="my-2 text-lg font-bold">Items added</Text>
            <Text className="my-2 text-sm text-gray-500">Clear all</Text>
          </View>

          <ScrollView>
            <FlatList
              showsVerticalScrollIndicator={false}
              className="mb-10"
              data={productsInCart}
              renderItem={({ item }) => (
                <View className="w-full flex shadow-3xl p-4">
                  <View className="flex-row items-center gap-1">
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 50, height: 50, borderRadius: 5 }}
                    />
                    <Text className="text-lg font-semibold">
                      {productsInCart.title}
                    </Text>
                    <Text className="text-lg font-semibold">
                      {productsInCart.price}
                    </Text>
                  </View>
                </View>
              )}
            />
          </ScrollView>

          <View className="absolute bottom-3 left-7 p-2 rounded-lg flex bg-red-500">
            <TouchableOpacity className="flex-row justify-center">
              <MinusCircleIcon color="white" size={36} />
              <TextInput className="text-center text-white self-center font-semibold text-xl">
                0
              </TextInput>
              <PlusCircleIcon color="white" size={36} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="absolute bottom-3 right-7">
          <TouchableOpacity className="flex-row p-4 w-28 items-center justify-center rounded-lg bg-red-500">
            <Text className="text-white text-lg font-bold">NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default CartModal;

import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Card } from "react-native-elements";

const MyAccountScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [Orders, setOrders] = useState([]);

  const handlePress = () => {
    setLoggedIn(true);
  };

  return (
    <SafeAreaView className="h-screen bg-white">
      <TouchableOpacity
        activeOpacity={0.5}
        className="ml-3 mt-2"
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon color="black" />
      </TouchableOpacity>
      <View className="flex items-center justify-center border-b border-gray-400">
        {/* Here will be the user's image in circle */}
        <FontAwesome
          name="user-circle"
          size={90}
          color="gray"
          style={{ marginBottom: 2 }}
        />

        {loggedIn && (
          <View className="flex items-center justify-center mb-5">
            <Text className="text-base font-semibold">{name}</Text>
            <Text className="text-base font-semibold">{email}</Text>
          </View>
        )}
      </View>

      {!loggedIn ? (
        <View className="flex m-3 gap-3 p-4 justify-center">
          <TextInput
            placeholder="Enter Name"
            className="border-0.5 border-red-500 p-2 rounded-md"
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <TextInput
            placeholder="Enter Email"
            textContentType="email"
            className="border-0.5 border-red-500 p-2 rounded-md"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            textContentType="password"
            secureTextEntry={true}
            placeholder="Enter Password"
            className="border-0.5 border-red-500 p-2 rounded-md text-lg"
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity
            onPress={handlePress}
            className="p-3 bg-red-500 w-32 self-center flex items-center rounded-md"
          >
            <Text className="text-white text-lg font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex my-5 gap-3 p-4 justify-center">
          <Card
            containerStyle={{
              borderRadius: 15,
              shadowColor: "gray",
              borderColor: "red",
            }}
          >
            <Card.Title>Your Orders</Card.Title>
            <Card.Divider />

            <Text style={{ marginBottom: 10 }}></Text>
          </Card>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyAccountScreen;

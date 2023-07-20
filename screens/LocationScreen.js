import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlassCircleIcon } from "react-native-heroicons/outline";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";

const LocationScreen = () => {
  const [cityInput, setCityInput] = useState("New York");
  const navigation = useNavigation();

  const handleCityInput = (text) => {
    setCityInput(text);
  };

  const handleButtonPress = async () => {
    try {
      await navigation.navigate("Home", { cityInput });
      console.log("Input text saved.");
    } catch (error) {
      console.log("Error saving input text:", error);
    }
  };

  return (
    <SafeAreaView>
      <ChevronLeftIcon
        onPress={() => navigation.goBack()}
        color="black"
        size={30}
        style={{ marginLeft: 8, marginTop: 10 }}
      />
      <View>
        <TextInput
          placeholder="Enter Your City"
          className="m-4 border border-gray-600 p-2 rounded-lg"
          onChangeText={handleCityInput}
          onSubmitEditing={handleButtonPress}
        />
        <TouchableOpacity
          className="absolute right-5 top-6 items-center"
          onPress={handleButtonPress}
        >
          <MagnifyingGlassIcon color="red" style={{ padding: 15 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronDownIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LocationInput = ({ cityInput, city }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("LocationScreen");
  };

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className="flex-row items-center mb-3 ml-3">
        <MapPinIcon color="red" />
        <Text className="font-bold text-lg" onPress={handlePress}>
          {cityInput ? cityInput : city}
        </Text>
        <ChevronDownIcon color="black" size={20} style={{ marginTop: 2 }} />
      </View>
    </TouchableOpacity>
  );
};

export default LocationInput;

import { View, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { Text } from "react-native";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleAlert = () => {
    Alert.alert("Feature under development!");
  };

  return (
    <View className="items-center justify-center flex-row">
      <View className="justify-start items-center m-1 shadow-slate-200 shadow-2xl z-20">
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Search a restaurant,a dish..."
          className="p-3 z-50 rounded-lg w-64 border border-gray-300 shadow-xl"
        />
      </View>
      <TouchableOpacity
        onPress={handleAlert}
        activeOpacity={0.5}
        className="rounded-md justify-center items-center w-20 h-12 relative mb-2 mx-1 -mt-4 self-end  bg-red-500 p-3 font-bold"
      >
        <Text className="text-base font-bold text-white">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

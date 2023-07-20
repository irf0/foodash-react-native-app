import { View, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native";

const SearchBar = () => {
  const handleSubmit = () => {
    // alert("Clicked the submit button 🥱!");
  };
  return (
    <View className="flex-row items-center justify-end m-3 shadow-slate-200 shadow-2xl z-20">
      <TextInput
        placeholder="Search a restaurant,a dish..."
        className="p-3 z-50 rounded-full w-full absolute border border-gray-300 shadow-xl"
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        className="rounded-full relative bg-red-500 mr-1 p-1.5 mb-1 font-bold"
      >
        <MagnifyingGlassIcon color="white" />
      </TouchableOpacity>
      {/* Here I will make a list item like google autocomplete and make it functional later.. */}
    </View>
  );
};

export default SearchBar;

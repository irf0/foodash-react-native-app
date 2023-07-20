import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View className="mt-0.5 flex-row items-center self-center space-x-2 p-3 rounded-lg bg-transparent">
      <HeaderButton
        text="Delivery"
        btnColor="red"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="red"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};
const HeaderButton = (props) => (
  <TouchableOpacity
    className={`${
      props.activeTab === props.text ? "bg-red-500" : "bg-white"
    } py-1.5 px-3 rounded-2xl mx-1 opacity-80`}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      className={`${
        props.activeTab === props.text ? "text-white" : "text-black"
      } font-extrabold`}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { UserCircleIcon, UserIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const MyAccount = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserAccountScreen")}
      >
        <UserCircleIcon color="red" style={{ padding: 17 }} />
      </TouchableOpacity>
    </View>
  );
};

export default MyAccount;

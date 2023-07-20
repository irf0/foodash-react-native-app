import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyAccountScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.5}
        className="ml-3 mt-2"
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon color="black" />
      </TouchableOpacity>
      <View className="flex items-center my-52 justify-center">
        <Text className="font-extrabold text-lg">
          Hi! Welcome to My Account section 🙏
          {/* Here will be the user's image in circle */}
          {/* User's name  */}
          {/* Your Order */}
          {/* Your Likes */}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyAccountScreen;

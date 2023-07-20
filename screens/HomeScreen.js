import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import LocationInput from "../components/LocationInput";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import MyAccount from "../components/MyAccount";

const YELP_API_KEY =
  "MkIA_u-kJexIyfiFlLGFPf9kBMez99PFjXccO-dS0qDCWN8TCv19JYgTJDLlJuVM-tgV_M9w3VTxjIFWAuCzqy1b_AkfC8-SBs-8KZmGmwBRy7xz2ZcQNRpn9aOpZHYx";

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [page, setPage] = useState(1);
  const [city, setCity] = useState("NewYork");
  const [activeTab, setActiveTab] = useState("Delivery");

  //Coming from the LocationScreen component
  const route = useRoute();
  const { cityInput } = route.params || { city };

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${
      cityInput ? cityInput : city
    }`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [page, cityInput, activeTab]);

  const handleEndReached = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SafeAreaView className="flex relative mb-56">
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <View className="absolute right-3 top-10">
          <MyAccount />
        </View>
        <LocationInput cityInput={cityInput} city={city} />
        <SearchBar />
        <Categories />
        <FlatList
          data={restaurantData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RestaurantItem item={item} />}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

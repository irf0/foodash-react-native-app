import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/LocationScreen";
import MyAccountScreen from "./screens/MyAccountScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import { Provider } from "react-redux";
import { store } from "./redux/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen
              name="UserAccountScreen"
              component={MyAccountScreen}
            />
            <Stack.Screen
              name="RestaurantDetailScreen"
              component={RestaurantDetailScreen}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/LocationScreen";
import MyAccountScreen from "./screens/MyAccountScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import FinalCartScreen from "./screens/FinalCartScreen";
import { StripeProvider } from "@stripe/stripe-react-native";
import OrderCompleteScreen from "./screens/OrderCompleteScreen";

const Stack = createNativeStackNavigator();

const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51NX5CjSJexbD8scVLzmgofUzIuYXvENd4u04YyPcYq5SGzsZYNXleaWPkeaf3uvRyeYiORJNLzmXpNrTElnricJM00SQHsa0n3";

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
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
              <Stack.Screen
                name="FinalCartScreen"
                component={FinalCartScreen}
              />
              <Stack.Screen
                name="OrderCompleteScreen"
                component={OrderCompleteScreen}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}

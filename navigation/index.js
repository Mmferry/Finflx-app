import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PersonalizeScreen from "../screens/PersonalizeScreen";

const Stack = createNativeStackNavigator();

export const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Personalize" component={PersonalizeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: "#FFF",
          card: "#F5F5FF",
          text: "#00001A",
          border: "#E5E5FF",
          primary: "#0000F0",
          notification: "#FFA500",
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Decks",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

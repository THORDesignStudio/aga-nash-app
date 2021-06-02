import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import Conditions from "./pages/Conditions";
import About from "./pages/About";
import Sources from "./pages/Sources";
import ApplicationProvider from "./applicationProvider/applicationProvider";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApplicationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Conditions" component={Conditions} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Sources" component={Sources} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

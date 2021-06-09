import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import Conditions from "./pages/Conditions";
import About from "./pages/About";
import Sources from "./pages/Sources";
import Navigate from "./pages/Navigate";
import Footnotes from "./pages/Footnotes";
import Abbreviations from './pages/Abbreviations'
import ApplicationProvider from "./applicationProvider/applicationProvider";

/**
 * This is the central hub of the app....clearly. Essentially all the pages live here and we use 
 * @param {package} reactNavigation - in order to set up nav between pages. Alot of this is using the 
 * @param {prop} navigation - to navigate between pages. You'll see this prop everywhere, so you'll get familiar real quick.
 */

const Stack = createStackNavigator();

export default function App() {

  return (
    <ApplicationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Conditions" component={Conditions} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Sources" component={Sources} />
          <Stack.Screen name="Navigate" component={Navigate} />
          <Stack.Screen name="Footnotes" component={Footnotes} />
          <Stack.Screen name ='Abbreviations' component={Abbreviations} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

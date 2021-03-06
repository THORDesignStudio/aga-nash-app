import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from 'expo';

import ApplicationProvider from "./applicationProvider/applicationProvider";

import HomeScreen from "./pages/HomeScreen";
import Conditions from "./pages/Conditions";
import About from "./pages/About";
import Sources from "./pages/Sources";
import Navigate from "./pages/Navigate";
import Footnotes from "./pages/Footnotes";
import Abbreviations from './pages/Abbreviations';
import FIB4 from './pages/FIB4';
import Results from './pages/Results'
import RiskManagement from "./pages/RiskManagement";
import OtherDiseases from './pages/OtherDiseases'
import HepRefer from './pages/HepRefer'
import LSM from './pages/LSM'

/**
 * This is the central hub of the app....clearly. Essentially all the pages live here and we use 
 * @param {package} reactNavigation - in order to set up nav between pages. A lot of this is using the 
 * @param {prop} navigation - to navigate between pages. You'll see this prop everywhere, so you'll get familiar real quick.
 */

const Stack = createStackNavigator();

export function App() {

  return (
    <ApplicationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Conditions" component={Conditions} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Sources" component={Sources} />
          <Stack.Screen name="Navigate" component={Navigate} />
          <Stack.Screen name="Footnotes" component={Footnotes} />
          <Stack.Screen name='Abbreviations' component={Abbreviations} />
          <Stack.Screen name='FIB4' component={FIB4} />
          <Stack.Screen name='Results' component={Results} />
          <Stack.Screen name='RiskManagement' component={RiskManagement} />
          <Stack.Screen name='OtherDiseases' component={OtherDiseases} />
          <Stack.Screen name='HepRefer' component={HepRefer} />
          <Stack.Screen name='LSM' component={LSM} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

// bootstraps app
registerRootComponent(App);
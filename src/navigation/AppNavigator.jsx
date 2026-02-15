import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORT ALL SCREENS
import Home from "../screens/Home/HomeScreen";
import BMI from "../screens/BMI/BMIScreen";
import BMR from "../screens/BMR/BMRScreen";
import BodyFat from "../screens/BodyFat/BodyFatScreen";
import IdealWeight from "../screens/IdealWeight/IdealWeightScreen";
import LeanBodyMass from "../screens/LeanBodyMass/LeanBodyMassScreen";
import HealthyWeight from "../screens/HealthyWeight/HealthyWeightScreen";
import TargetHeartRate from "../screens/TargetHeartRate/TargetHeartRateScreen";
import CaloriesBurned from "../screens/CaloriesBurned/CaloriesBurnedScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="BMI" component={BMI} />
        <Stack.Screen name="BMR" component={BMR} />
        <Stack.Screen name="BodyFat" component={BodyFat} />
        <Stack.Screen name="IdealWeight" component={IdealWeight} />
        <Stack.Screen name="LeanBodyMass" component={LeanBodyMass} />
        <Stack.Screen name="HealthyWeight" component={HealthyWeight} />
        <Stack.Screen name="TargetHeartRate" component={TargetHeartRate} />
        <Stack.Screen name="CaloriesBurned" component={CaloriesBurned} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

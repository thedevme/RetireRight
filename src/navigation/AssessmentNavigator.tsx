import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AgeScreen from '../screens/Assessment/AgeScreen';
import RetireAgeScreen from '../screens/Assessment/RetireAgeScreen';
import SavingsScreen from '../screens/Assessment/SavingsScreen';
import IncomeScreen from '../screens/Assessment/IncomeScreen';
import ApproachScreen from '../screens/Assessment/ApproachScreen';
import SummaryScreen from '../screens/Assessment/SummaryScreen';

const Stack = createNativeStackNavigator();

const AssessmentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Age' component={AgeScreen} />
      <Stack.Screen name='RetireAge' component={RetireAgeScreen} />
      <Stack.Screen name='Savings' component={SavingsScreen} />
      <Stack.Screen name='Income' component={IncomeScreen} />
      <Stack.Screen name='Approach' component={ApproachScreen} />
      <Stack.Screen name='Summary' component={SummaryScreen} />
    </Stack.Navigator>
  );
};

export default AssessmentNavigator;
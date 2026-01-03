import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CalculatorScreen from '../screens/CalculatorScreen'
import ApproachScreen from '../screens/Assessment/ApproachScreen'
import SummaryScreen from '../screens/Assessment/SummaryScreen'

export type CalculatorStackParamList = {
  CalculatorHome: undefined
  Approach: undefined
  Summary: undefined
}

const Stack = createNativeStackNavigator<CalculatorStackParamList>()

export default function CalculatorStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='CalculatorHome' component={CalculatorScreen} />
      <Stack.Screen name='Approach' component={ApproachScreen} />
      <Stack.Screen name='Summary' component={SummaryScreen} />
    </Stack.Navigator>
  )
}
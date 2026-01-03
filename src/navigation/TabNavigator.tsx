import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ToolsScreen from '../screens/ToolsScreen';
import CalculatorStackNavigator from './CalculatorStackNavigator'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E3A5F',
        tabBarInactiveTintColor: '#9CA3AF',
      }}>
      <Tab.Screen name='Dashboard' component={DashboardScreen} />
      <Tab.Screen name='Tools' component={ToolsScreen} />
      <Tab.Screen name='Calculator' component={CalculatorStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
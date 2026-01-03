import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabActions, useNavigation } from '@react-navigation/native';

const IncomeScreen = ({ navigation }: any) => {
  const [income, setIncome] = useState('6,500');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 py-4">
        <Pressable onPress={() => navigation.goBack()}>
          <Text className="text-primary text-2xl">←</Text>
        </Pressable>
        <Pressable onPress={() => navigation.getParent()?.navigate('Main')}>
          <Text className="text-primary font-semibold">Skip</Text>
        </Pressable>
      </View>

      {/* Progress Bar */}
      <View className="flex-row px-5 mt-2">
        <View className="flex-1 h-1 bg-primary rounded-full mr-1" />
        <View className="flex-1 h-1 bg-primary rounded-full mx-1" />
        <View className="flex-1 h-1 bg-primary rounded-full mx-1" />
        <View className="flex-1 h-1 bg-primary rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-1" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-8">
        <Text className="text-3xl font-bold text-primary">
          How much monthly income will you need in retirement?
        </Text>
        <Text className="text-secondary mt-3">
          Consider housing, food, healthcare, and lifestyle expenses.
        </Text>

        {/* Income Input */}
        <View className="flex-row items-baseline mt-12 border-b-2 border-primary pb-2">
          <Text className="text-5xl font-bold text-primary">$</Text>
          <TextInput
            className="text-5xl font-bold text-primary flex-1"
            value={income}
            onChangeText={setIncome}
            keyboardType="numeric"
          />
        </View>
        <Text className="text-secondary mt-2">per month</Text>
      </View>

      {/* Why This Matters */}
      <Pressable className="flex-row justify-center items-center mb-4">
        <View className="bg-gray-100 rounded-full px-4 py-2 flex-row items-center">
          <Text className="text-secondary mr-2">ⓘ</Text>
          <Text className="text-secondary">Why this matters</Text>
        </View>
      </Pressable>

      {/* Next Button */}
      <View className="px-5 pb-8">
        <Pressable
          className="bg-primary rounded-xl py-4"
          onPress={() => navigation.navigate('Approach')}
        >
          <Text className="text-white font-semibold text-center text-lg">
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default IncomeScreen;

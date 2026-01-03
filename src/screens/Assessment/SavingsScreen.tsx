import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabActions, useNavigation } from '@react-navigation/native';

const SavingsScreen = ({ navigation }: any) => {
  const [savings, setSavings] = useState('142,000');

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
        <View className="flex-1 h-1 bg-gray-200 rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-1" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-8">
        <Text className="text-3xl font-bold text-primary">
          What is your total retirement savings?
        </Text>
        <Text className="text-secondary mt-3">
          Include 401(k)s, IRAs, and other dedicated investment accounts.
        </Text>

        {/* Savings Input */}
        <View className="flex-row items-baseline mt-12 border-b-2 border-primary pb-2">
          <Text className="text-5xl font-bold text-primary">$</Text>
          <TextInput
            className="text-5xl font-bold text-primary flex-1"
            value={savings}
            onChangeText={setSavings}
            keyboardType="numeric"
          />
        </View>

        <Pressable className="mt-4">
          <Text className="text-primary font-medium">
            I don't have any savings yet
          </Text>
        </Pressable>
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
          onPress={() => navigation.navigate('Income')}
        >
          <Text className="text-white font-semibold text-center text-lg">
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SavingsScreen;

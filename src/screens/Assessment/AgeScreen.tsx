import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabActions, useNavigation } from '@react-navigation/native';

const AgeScreen = ({ navigation }: any) => {
  const [age, setAge] = useState('45');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 py-4">
        <Pressable onPress={() => navigation.goBack()}>
          <Text className="text-primary text-2xl">←</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.getParent()?.navigate('Main')}
          className="h-10 justify-center"
        >
          <Text className="text-primary text-base">Skip</Text>
        </Pressable>
      </View>

      {/* Progress Bar */}
      <View className="flex-row px-5 mt-2">
        <View className="flex-1 h-1 bg-primary rounded-full mr-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-1" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-8">
        <Text className="text-3xl font-bold text-primary text-center">
          What is your current age?
        </Text>
        <Text className="text-secondary text-center mt-3">
          This helps us calculate your timeline to retirement
        </Text>

        {/* Age Input */}
        <View className="flex-row justify-center items-baseline mt-16">
          <TextInput
            className="text-6xl font-bold text-primary text-center w-32"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            maxLength={2}
          />
          <Text className="text-2xl text-secondary ml-2">years old</Text>
        </View>
      </View>

      {/* Why This Matters */}
      <Pressable className="flex-row justify-center items-center mb-4">
        <Text className="text-secondary mr-2">ⓘ</Text>
        <Text className="text-secondary">Why this matters</Text>
      </Pressable>

      {/* Next Button */}
      <View className="px-5 pb-8">
        <Pressable
          className="bg-primary rounded-xl py-4"
          onPress={() => navigation.navigate('RetireAge')}
        >
          <Text className="text-white font-semibold text-center text-lg">
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AgeScreen;

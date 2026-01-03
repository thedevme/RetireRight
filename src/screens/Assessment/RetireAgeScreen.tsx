import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabActions, useNavigation } from '@react-navigation/native';

const RetireAgeScreen = ({ navigation }: any) => {
  const [selectedAge, setSelectedAge] = useState(65);
  const ages = [62, 63, 64, 65, 66, 67, 68, 69, 70];

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
        <View className="flex-1 h-1 bg-gray-200 rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full mx-1" />
        <View className="flex-1 h-1 bg-gray-200 rounded-full ml-1" />
      </View>

      {/* Content */}
      <View className="flex-1 px-5 pt-8">
        <Text className="text-3xl font-bold text-primary text-center">
          When do you plan to retire?
        </Text>
        <Text className="text-secondary text-center mt-3">
          Most people retire between 62 and 67
        </Text>

        {/* Age Picker */}
        <View className="flex-1 justify-center">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 100 }}
          >
            {ages.map(age => (
              <Pressable
                key={age}
                onPress={() => setSelectedAge(age)}
                className={`py-4 mx-10 rounded-xl mb-2 ${
                  selectedAge === age ? 'bg-gray-100' : ''
                }`}
              >
                <View className="flex-row justify-center items-baseline">
                  <Text
                    className={`text-4xl font-bold ${
                      selectedAge === age ? 'text-primary' : 'text-gray-300'
                    }`}
                  >
                    {age}
                  </Text>
                  <Text
                    className={`text-lg ml-2 ${
                      selectedAge === age ? 'text-secondary' : 'text-gray-300'
                    }`}
                  >
                    years old
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
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
          onPress={() => navigation.navigate('Savings')}
        >
          <Text className="text-white font-semibold text-center text-lg">
            Next
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default RetireAgeScreen;

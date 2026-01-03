import React from 'react';
import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CalculatorScreen = () => {
  return (
    <SafeAreaView edges={['top']} className='flex-1 bg-gray-100'>
      {/* Header */}
      <View className='flex-row justify-between items-center px-5 py-4'>
        <Pressable>
          <Text className='text-primary text-2xl'>←</Text>
        </Pressable>
        <Text className='text-lg font-semibold text-primary'>Financial Tools</Text>
        <Pressable>
          <Text className='text-primary text-xl'>⋯</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Start Assessment Button */}
        <Pressable className='bg-primary rounded-xl py-4 mx-5 flex-row justify-center items-center'>
          <Text className='text-white font-semibold'>▶ Start Assessment</Text>
        </Pressable>

        {/* Compound Interest Section */}
        <View className='px-5 mt-6'>
          <Text className='text-secondary text-xs font-semibold'>GROWTH ENGINE</Text>
          <Text className='text-primary text-2xl font-bold mt-1'>Compound Interest</Text>
          <Text className='text-secondary text-sm mt-1'>Project your wealth growth to 2044</Text>
        </View>

        {/* Graph Card */}
        <View className='bg-white rounded-2xl p-5 mx-5 mt-4'>
          <View className='flex-row justify-between items-start'>
            <View>
              <Text className='text-secondary text-xs'>PROJECTED VALUE</Text>
              <Text className='text-primary text-3xl font-bold'>$333,450</Text>
            </View>
            <View className='bg-success-light px-3 py-1 rounded-full flex-row items-center'>
              <Text className='text-success text-sm font-semibold'>↑ +126%</Text>
            </View>
          </View>

          {/* Graph Placeholder */}
          <View className='h-48 mt-4 justify-end'>
            {/* Simple curve representation */}
            <View className='h-40 border-l border-b border-gray-200 relative'>
              <View className='absolute bottom-0 left-0 right-0 h-32 bg-primary/10 rounded-tr-full' />
              <View className='absolute right-2 top-2 bg-primary px-2 py-1 rounded'>
                <Text className='text-white text-xs font-bold'>$842k</Text>
              </View>
            </View>
            {/* X-axis labels */}
            <View className='flex-row justify-between mt-2'>
              <Text className='text-secondary text-xs'>2024</Text>
              <Text className='text-secondary text-xs'>2029</Text>
              <Text className='text-secondary text-xs'>2034</Text>
              <Text className='text-secondary text-xs'>2039</Text>
              <Text className='text-secondary text-xs'>2044</Text>
            </View>
          </View>
        </View>

        {/* Input Fields */}
        <View className='mx-5 mt-4'>
          <View className='flex-row'>
            <View className='flex-1 mr-2'>
              <Text className='text-secondary text-xs mb-1'>Principal ($)</Text>
              <View className='bg-white rounded-lg p-4 flex-row items-center'>
                <Text className='text-secondary mr-1'>$</Text>
                <TextInput 
                  className='flex-1 text-primary text-lg'
                  defaultValue='50,000'
                  keyboardType='numeric'
                />
              </View>
            </View>
            <View className='flex-1 ml-2'>
              <Text className='text-secondary text-xs mb-1'>Monthly ($)</Text>
              <View className='bg-white rounded-lg p-4 flex-row items-center'>
                <Text className='text-secondary mr-1'>$</Text>
                <TextInput 
                  className='flex-1 text-primary text-lg'
                  defaultValue='500'
                  keyboardType='numeric'
                />
              </View>
            </View>
          </View>

          <View className='flex-row mt-3 mb-8'>
            <View className='flex-1 mr-2'>
              <Text className='text-secondary text-xs mb-1'>Rate (%)</Text>
              <View className='bg-white rounded-lg p-4 flex-row items-center'>
                <TextInput 
                  className='flex-1 text-primary text-lg'
                  defaultValue='6.5'
                  keyboardType='numeric'
                />
                <Text className='text-secondary ml-1'>%</Text>
              </View>
            </View>
            <View className='flex-1 ml-2'>
              <Text className='text-secondary text-xs mb-1'>Years</Text>
              <View className='bg-white rounded-lg p-4'>
                <TextInput 
                  className='flex-1 text-primary text-lg'
                  defaultValue='20'
                  keyboardType='numeric'
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
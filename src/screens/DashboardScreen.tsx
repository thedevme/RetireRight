import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  return (
    <SafeAreaView edges={['top']} className='flex-1 bg-gray-100'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center px-5 pt-2">
          <View className="w-10 h-10 rounded-full bg-gray-300" />
          <View className="w-10 h-10 rounded-full bg-gray-300" />
        </View>

        {/* Welcome Section */}
        <View className="px-5 pt-5">
          <Text className="text-3xl text-primary">Welcome back,</Text>
          <Text className="text-3xl font-bold text-primary">Michael</Text>
          <View className="bg-success-light px-3 py-1.5 rounded-full self-start mt-2">
            <Text className="text-success text-sm font-medium">
              ✓ On track for 2035
            </Text>
          </View>
        </View>

        {/* Retirement Readiness Card */}
        <View className="bg-white rounded-2xl p-6 mx-5 mt-5 items-center">
          <View className="w-36 h-36 rounded-full border-[10px] border-primary justify-center items-center mb-4">
            <Text className="text-4xl font-bold text-primary">68%</Text>
            <Text className="text-xs text-secondary font-semibold">
              ON TRACK
            </Text>
          </View>
          <Text className="text-lg font-semibold text-primary mb-1">
            Retirement Readiness
          </Text>
          <Text className="text-sm text-secondary">
            You're making solid progress. Keep it up!
          </Text>
        </View>

        {/* Attention Needed Card */}
        <View className="bg-warning-light rounded-2xl p-4 mx-5 mt-4">
          <View className="flex-row items-start">
            <Text className="text-warning text-xl mr-2">⚠</Text>
            <View className="flex-1">
              <Text className="text-warning text-sm font-semibold">
                ATTENTION NEEDED
              </Text>
              <Text className="text-primary text-lg font-bold mt-1">
                $2,400/month gap projected
              </Text>
              <Text className="text-secondary text-sm mt-1">
                Based on current inflation, your savings may fall short.
                Increase monthly contributions to close the gap.
              </Text>
            </View>
          </View>
        </View>

        {/* Stats Row */}
        <View className="flex-row mx-5 mt-4">
          <View className="flex-1 bg-white rounded-2xl p-4 mr-2">
            <View className="w-10 h-10 rounded-xl bg-gray-100 items-center justify-center">
              <Text className="text-xl">💳</Text>
            </View>
            <Text className="text-secondary text-xs">CURRENT SAVINGS</Text>
            <Text className="text-primary text-xl font-bold mt-1">
              $450,000
            </Text>
          </View>
          <View className="flex-1 bg-white rounded-2xl p-4 ml-2">
            <View className="w-10 h-10 rounded-xl bg-gray-100 items-center justify-center">
              <Text className="text-xl">⏳</Text>
            </View>
            <Text className="text-secondary text-xs">PROJECTED AGE</Text>
            <Text className="text-primary text-xl font-bold mt-1">
              67 years
            </Text>
          </View>
        </View>

        <Pressable className="bg-primary rounded-xl py-4 mx-5 mt-4 flex-row justify-center items-center">
          <Text className="text-white font-semibold text-base">
            📋 Update My Plan
          </Text>
        </Pressable>

        <Pressable className="bg-white rounded-xl py-4 mx-5 mt-3 flex-row justify-center items-center border border-gray-200">
          <Text className="text-primary font-semibold text-base">
            Explore Tools
          </Text>
        </Pressable>

        {/* Saved Plans Header */}
        <View className="flex-row justify-between items-center mx-5 mt-6">
          <Text className="text-lg font-semibold text-primary">
            Saved Plans
          </Text>
          <Pressable>
            <Text className="text-primary text-sm">View All</Text>
          </Pressable>
        </View>

        {/* Saved Plan Card 1 */}
        <Pressable className="bg-white rounded-2xl p-4 mx-5 mt-3">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-primary font-semibold">
                Early Retirement Plan
              </Text>
              <Text className="text-secondary text-xs mt-1">
                Created Oct 12, 2023
              </Text>
            </View>
            <Text className="text-secondary">→</Text>
          </View>
          <View className="flex-row mt-3">
            <View className="mr-6">
              <Text className="text-secondary text-xs">Principal</Text>
              <Text className="text-primary font-bold">$250,000</Text>
            </View>
            <View className="w-px h-10 bg-gray-200" />
            <View className="pl-6">
              <Text className="text-success text-xs">Projected Value</Text>
              <Text className="text-success font-bold">$1,240,000</Text>
            </View>
          </View>
        </Pressable>

        {/* Saved Plan Card 2 */}
        <Pressable className="bg-white rounded-2xl p-4 mx-5 mt-3">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-primary font-semibold">
                Conservative Model
              </Text>
              <Text className="text-secondary text-xs mt-1">
                Created Sep 28, 2023
              </Text>
            </View>
            <Text className="text-secondary">→</Text>
          </View>
          <View className="flex-row mt-3">
            <View className="mr-6">
              <Text className="text-secondary text-xs">Principal</Text>
              <Text className="text-primary font-bold">$250,000</Text>
            </View>
            <View className="w-px h-10 bg-gray-200" />
            <View className="pl-6">
              <Text className="text-secondary text-xs">Projected Value</Text>
              <Text className="text-secondary text-lg font-bold">$980,000</Text>
            </View>
          </View>
        </Pressable>

        {/* Market Insights */}
        <Pressable className="bg-white rounded-2xl mx-5 mt-5 overflow-hidden">
          {/* Image header */}
          <View className="relative h-36">
            <Image
              source={require('../assets/images/market-insights.png')}
              className="w-full h-full"
              resizeMode="cover"
            />

            {/* Overlay pill */}
            <View className="absolute left-4 bottom-3 bg-black/40 px-4 py-2 rounded-xl">
              <Text className="text-white font-semibold tracking-wide">
                MARKET INSIGHTS
              </Text>
            </View>
          </View>

          {/* Content */}
          <View className="p-4">
            <Text className="text-primary text-base font-semibold">
              Q4 Market Outlook: Navigating Inflation
            </Text>

            <Text className="text-secondary text-sm mt-2">
              Experts weigh in on how persistent inflation might affect
              long-term retirement portfolios...
            </Text>

            <View className="flex-row items-center mt-3">
              <Text className="text-primary font-semibold">Read Article</Text>
              <Text className="text-primary ml-2">→</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

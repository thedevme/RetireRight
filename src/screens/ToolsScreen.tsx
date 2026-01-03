import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ToolsScreen = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row justify-between items-center px-5 pt-2">
        <Text className="text-xl font-bold text-primary">Financial Tools</Text>
        <View className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center" />
        <Text>👤</Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="bg-white rounded-2xl p-5 mx-5 mt-2">
          <Text className="text-secondary text-xs font-semibold">
            RETIREMENT REALITY CHECK
          </Text>
          <View className="flex-row items-center justify-between mt-1">
            <Text className="text-primary text-2xl font-bold">Income Gap</Text>
            <View className="bg-warning-light px-3 py-1 rounded-full">
              <Text className="text-warning text-xs font-semibold">
                Warning
              </Text>
            </View>
          </View>

          <Text className="text-warning text-4xl font-bold mt-3">$1,800</Text>
          <Text className="text-secondary text-sm">Monthly Shortfall</Text>

          {/* Progress Bars */}
          <View className="mt-4">
            <View className="flex-row justify-between mb-1">
              <Text className="text-secondary text-xs">Income Needed</Text>
              <Text className="text-secondary text-xs">$5,000</Text>
            </View>
            <View className="h-2 bg-gray-200 rounded-full">
              <View className="h-2 bg-primary rounded-full w-[64%]" />
              <View className="h-2 bg-warning rounded-full w-[36%] absolute right-0" />
            </View>
          </View>

          <Text className="text-warning text-xs text-right mt-1">
            Gap: 36% of goal
          </Text>
        </View>

        {/* Compound Interest Card */}
        <View className="bg-white rounded-2xl p-5 mx-5 mt-4">
          <Text className="text-secondary text-xs font-semibold">
            GROWTH ENGINE
          </Text>
          <Text className="text-primary text-2xl font-bold mt-1">
            Compound Interest
          </Text>

          {/* Graph Placeholder */}
          <View className="h-40 bg-gray-100 rounded-xl mt-4 items-center justify-center">
            <Text className="text-secondary">📈 Graph</Text>
          </View>

          {/* Inputs Row 1 */}
          <View className="flex-row mt-4">
            <View className="flex-1 mr-2">
              <Text className="text-secondary text-xs mb-1">Principal ($)</Text>
              <View className="bg-gray-100 rounded-lg p-3">
                <Text className="text-primary">50000</Text>
              </View>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-secondary text-xs mb-1">Monthly ($)</Text>
              <View className="bg-gray-100 rounded-lg p-3">
                <Text className="text-primary">500</Text>
              </View>
            </View>
          </View>

          {/* Inputs Row 2 */}
          <View className="flex-row mt-3">
            <View className="flex-1 mr-2">
              <Text className="text-secondary text-xs mb-1">Rate (%)</Text>
              <View className="bg-gray-100 rounded-lg p-3">
                <Text className="text-primary">6.5</Text>
              </View>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-secondary text-xs mb-1">Years</Text>
              <View className="bg-gray-100 rounded-lg p-3">
                <Text className="text-primary">20</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Annuity Impact Card */}
        <View className="bg-white rounded-2xl p-5 mx-5 mt-4 mb-8">
          <Text className="text-secondary text-xs font-semibold">
            GAP CLOSER
          </Text>
          <Text className="text-primary text-2xl font-bold mt-1">
            Annuity Impact
          </Text>
          <Text className="text-secondary text-sm mt-1">
            Allocate a portion of savings to guaranteed income to reduce your
            monthly gap.
          </Text>

          {/* Allocation Slider */}
          <View className="bg-gray-100 rounded-xl p-4 mt-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-secondary text-xs">ALLOCATION</Text>
              <Text className="text-primary text-xl font-bold">$100,000</Text>
            </View>

            {/* Slider Track */}
            <View className="h-2 bg-gray-300 rounded-full mt-3">
              <View className="h-2 bg-primary rounded-full w-[20%]" />
            </View>

            <View className="flex-row justify-between mt-2">
              <Text className="text-secondary text-xs">$0</Text>
              <Text className="text-secondary text-xs">$500k</Text>
            </View>
          </View>

          {/* Result */}
          <View className="flex-row items-center mt-4">
            <View className="w-10 h-10 rounded-full bg-success-light items-center justify-center">
              <Text className="text-success">📉</Text>
            </View>
            <View className="ml-3">
              <Text className="text-secondary text-xs">
                Projected Gap Reduction
              </Text>
              <Text className="text-success text-xl font-bold">
                -$450 / month
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ToolsScreen;

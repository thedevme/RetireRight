import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function SummaryScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-4">
        <Pressable
          onPress={() => navigation.goBack()}
          className="h-10 w-10 items-center justify-center"
        >
          <Text className="text-primary text-2xl">‹</Text>
        </Pressable>

        <Text className="text-primary font-semibold">Summary</Text>

        <Pressable className="h-10 w-10 items-center justify-center">
          <Text className="text-primary text-xl">⤴︎</Text>
        </Pressable>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        {/* Title */}
        <View className="px-5 mt-2">
          <Text className="text-primary text-3xl font-bold text-center">
            Your Retirement Plan{'\n'}Summary
          </Text>

          <Text className="text-secondary text-center mt-3">
            Great start, Alex! You are building a solid foundation. Here is your
            initial outlook.
          </Text>
        </View>

        {/* Readiness card (placeholder for ring/chart for now) */}
        <View className="mx-5 mt-6 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <View className="px-4 pt-4 flex-row items-center justify-between">
            <Text className="text-primary font-semibold">
              Retirement Readiness
            </Text>

            <View className="bg-green-100 px-3 py-1 rounded-full">
              <Text className="text-green-700 text-xs font-semibold">
                GOOD PACE
              </Text>
            </View>
          </View>

          <View className="px-4 pb-5 pt-4 items-center">
            {/* Replace this with your ring component later */}
            <View className="h-32 w-32 rounded-full border-8 border-gray-100 items-center justify-center">
              <Text className="text-primary text-3xl font-bold">72%</Text>
              <Text className="text-secondary text-xs mt-1">On Track</Text>
            </View>

            <Text className="text-secondary mt-4 text-sm">
              Projected Retirement Age
            </Text>
            <Text className="text-primary text-lg font-bold mt-1">
              65 Years
            </Text>
          </View>
        </View>

        {/* Income projection */}
        <View className="mx-5 mt-4 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <View className="px-4 pt-4 flex-row items-center">
            <Text className="text-primary font-semibold">
              Income Projection
            </Text>
          </View>

          <View className="px-4 pt-3 pb-4">
            <Text className="text-secondary text-xs">
              PROJECTED MONTHLY INCOME
            </Text>
            <Text className="text-primary text-2xl font-bold mt-1">$5,800</Text>

            {/* bar */}
            <View className="h-2 rounded-full bg-gray-100 mt-3 overflow-hidden">
              <View className="h-2 w-4/5 bg-primary" />
            </View>

            <View className="flex-row justify-between mt-4">
              <View>
                <Text className="text-secondary text-xs">DESIRED INCOME</Text>
                <Text className="text-primary text-lg font-semibold mt-1">
                  $6,500
                </Text>
              </View>

              <View className="items-end">
                <Text className="text-orange-500 text-xs font-semibold">
                  ▲ SHORTFALL
                </Text>
                <Text className="text-orange-500 text-lg font-bold mt-1">
                  -$700
                </Text>
                <Text className="text-secondary text-xs">/mo</Text>
              </View>
            </View>

            <Text className="text-secondary mt-4 text-sm">
              You&apos;re close! Increasing your monthly contribution by{' '}
              <Text className="text-primary font-semibold">$350</Text> could
              close this gap.
            </Text>
          </View>
        </View>

        {/* Profile */}
        <View className="mx-5 mt-4 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <View className="px-4 pt-4">
            <Text className="text-secondary text-xs font-semibold">
              YOUR PROFILE
            </Text>
          </View>

          <Row label="Current Age" value="42" />
          <Divider />
          <Row label="Retire At" value="65" />
          <Divider />
          <Row
            label="Risk Profile"
            value="Moderate"
            valueStyle="text-primary"
          />
        </View>

        {/* Financials */}
        <View className="mx-5 mt-4 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <View className="px-4 pt-4">
            <Text className="text-secondary text-xs font-semibold">
              FINANCIALS
            </Text>
          </View>

          <Row label="Total Savings" value="$240k" />
          <Divider />
          <Row label="Monthly Contr." value="$1,200" />
        </View>

        {/* Buttons */}
        <View className="px-5 mt-6">
          <Pressable
            onPress={() =>
              navigation.getParent()?.navigate('Main', { screen: 'Tools' })
            }
            className="bg-primary rounded-xl py-4 items-center"
          >
            <Text className="text-white text-base font-semibold">
              Explore Tools →
            </Text>
          </Pressable>

          <Pressable className="bg-white border border-gray-200 rounded-xl py-4 items-center mt-3">
            <Text className="text-primary text-base font-semibold">
              Adjust My Plan
            </Text>
          </Pressable>

          {/* NEW: Close */}
          <Pressable
            onPress={() =>
              navigation.getParent()?.navigate('Main', { screen: 'Dashboard' })
            }
            className="py-4 items-center"
          >
            <Text className="text-secondary text-base">Close</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Row({
  label,
  value,
  valueStyle = 'text-secondary',
}: {
  label: string;
  value: string;
  valueStyle?: string;
}) {
  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      <Text className="text-secondary text-sm">{label}</Text>
      <Text className={`text-sm font-semibold ${valueStyle}`}>{value}</Text>
    </View>
  );
}

function Divider() {
  return <View className="h-px bg-gray-200" />;
}

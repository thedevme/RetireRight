import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ApproachOption = 'Conservative' | 'Balanced' | 'Growth'

export default function ApproachScreen({ navigation }: any) {
  const [selected, setSelected] = useState<ApproachOption>('Balanced')

  return (
    <SafeAreaView edges={['top']} className='flex-1 bg-white'>
      <View className='flex-1'>
        {/* Top nav */}
        <View className='flex-row items-center justify-between px-5 pt-2'>
          <Pressable
            onPress={() => navigation.goBack()}
            className='h-10 w-10 items-center justify-center'
          >
            <Text className='text-primary text-2xl'>‹</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.getParent()?.navigate('Main')}
            className='h-10 justify-center'
          >
            <Text className='text-primary text-base'>Skip</Text>
          </Pressable>
        </View>

        {/* Progress (step 5 of 5) */}
        <View className='flex-row px-5 mt-3'>
          <View className='h-1 flex-1 rounded-full bg-primary mr-2' />
          <View className='h-1 flex-1 rounded-full bg-primary mr-2' />
          <View className='h-1 flex-1 rounded-full bg-primary mr-2' />
          <View className='h-1 flex-1 rounded-full bg-primary mr-2' />
          <View className='h-1 flex-1 rounded-full bg-primary' />
        </View>

        <ScrollView className='flex-1' contentContainerStyle={{ paddingBottom: 24 }}>
          {/* Title */}
          <View className='px-5 mt-8'>
            <Text className='text-primary text-4xl font-bold leading-tight'>
              What’s your investing approach?
            </Text>

            <Text className='text-secondary text-base mt-3'>
              This helps tailor your plan based on how much risk you’re comfortable taking.
            </Text>
          </View>

          {/* Options */}
          <View className='px-5 mt-8 space-y-4'>
            <ApproachCard
              title='Conservative'
              subtitle='Lower risk, steadier growth'
              selected={selected === 'Conservative'}
              onPress={() => setSelected('Conservative')}
            />

            <ApproachCard
              title='Balanced'
              subtitle='Mix of growth and stability'
              selected={selected === 'Balanced'}
              onPress={() => setSelected('Balanced')}
            />

            <ApproachCard
              title='Growth'
              subtitle='Higher risk, higher potential return'
              selected={selected === 'Growth'}
              onPress={() => setSelected('Growth')}
            />
          </View>

          {/* Why this matters pill */}
          <View className='px-5 mt-10 items-center'>
            <Pressable className='bg-gray-100 px-6 py-3 rounded-full'>
              <Text className='text-secondary'>ⓘ Why this matters</Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* Bottom CTA */}
        <View className='px-5 pb-6'>
          <Pressable
            onPress={() => navigation.navigate('Summary')}
            className='bg-primary rounded-xl py-4 items-center'
          >
            <Text className='text-white text-base font-semibold'>Calculate</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

function ApproachCard({
  title,
  subtitle,
  selected,
  onPress,
}: {
  title: string
  subtitle: string
  selected: boolean
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-2xl p-4 border ${
        selected ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'
      }`}
    >
      <View className='flex-row items-center justify-between'>
        <View>
          <Text className='text-primary text-lg font-semibold'>{title}</Text>
          <Text className='text-secondary mt-1'>{subtitle}</Text>
        </View>

        <View
          className={`h-6 w-6 rounded-full border ${
            selected ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
          }`}
        />
      </View>
    </Pressable>
  )
}
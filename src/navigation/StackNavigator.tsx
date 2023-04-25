import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/home'
import DetailScreen from '../screens/detail'
import { Product } from '../types'

export type RootStackParamList = {
  Store: undefined
  Detail: { product: Product; isFavourite: boolean }
}

const Stack = createStackNavigator<RootStackParamList>()

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Store"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: '#2B2B48',
          borderBottomColor: '#2B2B48',
        },
        headerTintColor: 'white',
        headerTitleContainerStyle: {
          maxWidth: 250,
        },
      }}
    >
      <Stack.Screen
        name="Store"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/home'
import DetailScreen from '../screens/detail'
import { Product } from '../types'
import { Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Store: undefined
  Detail: { product: Product }
}

const Stack = createStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="Store" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: {
              color: 'black',
            },
            headerTintColor: 'black',
            title: route.params.product.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

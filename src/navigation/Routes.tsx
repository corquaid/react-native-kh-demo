import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/home'
import DetailScreen from '../screens/detail'

export type RootStackParamList = {
  Store: undefined
  Detail: { productId: number }
}

const Stack = createStackNavigator<RootStackParamList>()

export default function Routes({}) {
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
        }}
      >
        <Stack.Screen name="Store" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

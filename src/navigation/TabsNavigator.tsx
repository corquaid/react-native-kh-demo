import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import FavouritesScreen from '../screens/favourites'
import { StackNavigator } from './StackNavigator'
import Icon from 'react-native-vector-icons/AntDesign'

export type BottomTabParamList = {
  Home: undefined
  Favourites: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#212134',
            borderBottomColor: '#212134',
          },
          headerTintColor: 'white',
          headerTitleContainerStyle: {
            maxWidth: 250,
          },
          tabBarStyle: { backgroundColor: '#212134', height: 60 },
          
          tabBarLabelStyle: { fontSize: 12, color: 'white', marginBottom: 6 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="home" size={20} color="white" />,
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarIcon: () => <Icon name="hearto" size={20} color="white" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

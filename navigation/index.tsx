/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Home from '../screens/Home';
import City from '../screens/City';
import CountryCities from '../screens/CountryCities';
import SearchCity from '../screens/SearchCity';
import SearchCountry from '../screens/SearchCountry';
import { MainStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <MainNavigator />
      </NavigationContainer>
  );
}

/**
 * Main stack navigator
 */
const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Oops!' }} />
      <Stack.Screen name="SearchCity" component={SearchCity} options={{ title: 'Oops!' }} />
      <Stack.Screen name="SearchCountry" component={SearchCountry} options={{ title: 'Oops!' }} />
      <Stack.Screen name="CountryCities" component={CountryCities} options={{ title: 'Oops!' }} />
      <Stack.Screen name="City" component={City} options={{ title: 'Oops!' }} />

    </Stack.Navigator>
  );
}

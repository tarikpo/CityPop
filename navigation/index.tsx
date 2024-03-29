/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
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


/**
 * Navigation used in the App
 * @param colorScheme - Which chooses theme
 * @constructor
 */
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
    <Stack.Navigator
        screenOptions={{
            headerTintColor: 'black',
            headerStyle: { backgroundColor: 'white' },
        }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="SearchCity" component={SearchCity} options={{headerShadowVisible:false,headerBackTitleVisible:false ,headerTitle:""}} />
      <Stack.Screen name="SearchCountry" component={SearchCountry} options={{headerShadowVisible:false,headerBackTitleVisible:false ,headerTitle:""}} />
      <Stack.Screen name="CountryCities" component={CountryCities} options={{headerShadowVisible:false,headerBackTitleVisible:false ,headerTitle:""}} />
      <Stack.Screen name="City" component={City}options={{headerShadowVisible:false,headerBackTitleVisible:false ,headerTitle:""}} />

    </Stack.Navigator>
  );
}

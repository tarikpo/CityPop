/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface MainParamList extends MainStackParamList {}
  }
}

export type MainStackParamList = {
  Home: undefined;
  City:{
    cityName:string,
    cityPopulation:number
  },
  CountryCities: {
    data: CityObj[],
  };
  SearchCity: undefined;
  SearchCountry: undefined;

};

export type CityObj = {
  population: number,
  countryName: string,
  countryCode:string,
  name:string,
  geonameId:string,
}

export type MainStackScreenProps<Screen extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  Screen
>;


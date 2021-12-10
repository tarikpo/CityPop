/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface MainParamList extends MainStackParamList {}
  }
}

/**
 * What screens the main navigator can navigate to
 * and what parameters have to be sent to respective screen
 */
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

/**
 * Object that represents city from fetching has to have at least these attributes
 */
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


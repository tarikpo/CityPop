import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { View } from '../components/Themed';
import ScreenTitle from '../components/ScreenTitle';
import Button from '../components/Button';
import { MainStackScreenProps } from '../types';

/**
 * Home screen
 * @param navigation - Used to navigate to next screen
 * @constructor
 */
export default function Home({ navigation }: MainStackScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <ScreenTitle text={"CityPop"}/>
            <Button text={"search by city"} onPress={() => navigation.navigate('SearchCity')}></Button>
            <Button text={"search by country"} onPress={() => navigation.navigate('SearchCountry')}></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
    },
    btn: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});

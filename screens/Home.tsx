import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import ScreenTitle from '../components/ScreenTitle';
import Button from '../components/Button';

import { MainStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: MainStackScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <ScreenTitle text={"hej"}/>
            <Button text={"search by city"} onPress={() => navigation.navigate('SearchCity')}></Button>
            <Button text={"search by country"} onPress={() => navigation.navigate('SearchCountry')}></Button>
        </View>
    );
}

function cityPressed (){
}
function countryPressed (){

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    btn: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});

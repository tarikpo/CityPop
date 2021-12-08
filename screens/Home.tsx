import * as React from 'react';
import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import ScreenTitle from '../components/ScreenTitle';

import { MainStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: MainStackScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <ScreenTitle title={"hej"}/>
            <Button title={"search by city"} onPress={() => navigation.navigate('SearchCity')}></Button>
            <Button title={"search by country"} onPress={countryPressed}></Button>
            <TouchableOpacity onPress={() => navigation.navigate('SearchCity')} style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
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
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

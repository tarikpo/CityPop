import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import { MainStackScreenProps } from '../types';

export default function City({ route,navigation }: MainStackScreenProps<'City'>) {
    const {cityName,cityPopulation} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>City {cityName} has {cityPopulation} people living in it.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </View>
    );
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

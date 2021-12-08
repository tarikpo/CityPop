import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import { MainStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: MainStackScreenProps<'CountryCities'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Not found.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('City')} style={styles.link}>
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

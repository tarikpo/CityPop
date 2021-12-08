import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import {Text, View} from './Themed';

export default function ScreenTitle({title}: { title: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title} lightColor={Colors.light.tint}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 50,
        padding:15,
    },
    title: {
        marginVertical: 7,
    },
});

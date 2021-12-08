import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {Text, View} from './Themed';

interface Props{
    text: string,
}

const ScreenTitle: React.FC<Props> = ({text}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text} lightColor={Colors.light.tint}>
                {text}
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
    text: {
        marginVertical: 7,
    },
});

export default ScreenTitle;
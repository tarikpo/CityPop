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
        width: "100%",
        paddingVertical:110,
    },
    text: {
        fontSize: 42,
        fontWeight:"600",
        color: "black",

    },
});

export default ScreenTitle;
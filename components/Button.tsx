import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';


import Colors from '../constants/Colors';
import {Text, View} from './Themed';

interface Props{
    text: string,
    onPress: () => void,
}

const Button: React.FC<Props> = ({text, onPress}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.btnText} lightColor={Colors.light.tint}>
                {text.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 50,
        padding:15,
    },
    btnText: {
        marginVertical: 7,
    },
});

export default Button;
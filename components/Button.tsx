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
        backgroundColor: 'black',
        width:"90%",
        maxWidth:500,
        marginHorizontal: 50,
        padding:25,
        margin:10,
    },
    btnText: {
        color: "white",
    },
});

export default Button;
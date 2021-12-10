import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';


import Colors from '../constants/Colors';
import {Text} from './Themed';

interface Props{
    text: string,
    onPress: () => void,
    disabled?:boolean,
    style?:any,
}

/**
 * Button component for the application
 * @param style - Optional prop to override the styling of the component
 * @param text - The text that will be displayed in the button
 * @param onPress - Function which is executed once the button is pressed
 * @param disabled - Optional prop which disables the button
 * @constructor
 */
const Button: React.FC<Props> = ({style,text, onPress , disabled=false}) =>{
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={style?style:disabled?[styles.container,{backgroundColor:"grey"}]:styles.container}>
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
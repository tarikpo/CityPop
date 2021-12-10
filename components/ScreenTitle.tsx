import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {Text, View} from './Themed';
import { LayoutChangeEvent } from "react-native";


interface Props{
    text: string,
    onLayout?: ( event: LayoutChangeEvent ) => void,
    fontSize?: number,
    paddingBottom?: number,

}

/**
 * Component which display a title on the screen
 * @param text - The text that will
 * @param onLayout - Function which uses React Native's LayoutChangeEvent
 * @param fontSize - Varible to override the fontSize of the title text
 * @param paddingBottom - Varible to override the paddingBottom of ScreenTitle
 * @constructor
 */
const ScreenTitle: React.FC<Props> = ({text,onLayout, fontSize,paddingBottom}) =>{
    return (
        <View onLayout={onLayout} style={paddingBottom?[styles.container,{paddingBottom:paddingBottom}]:styles.container}>
            <Text style={fontSize?[styles.text,{fontSize:fontSize}]:styles.text} lightColor={Colors.light.tint}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: "100%",
        paddingTop:110,
        paddingBottom:110,

    },
    text: {
        fontSize: 42,
        fontWeight:"600",
        color: "black",
        textAlign:"center",
    },
});

export default ScreenTitle;
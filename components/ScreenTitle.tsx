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
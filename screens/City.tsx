import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

import {MainStackScreenProps} from '../types';
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";

export default function City({route, navigation}: MainStackScreenProps<'City'>) {
    const {cityName, cityPopulation} = route.params;

    const reverseString = (str:string) =>{
        return str.split("").reverse().join("");
    }

    const formatNumber= () =>{
        let reversedName = reverseString(cityPopulation.toString())
        let every = 3;
        let retArr = [];
        let i;
        let len;

        for(i = 0, len = reversedName.length; i < len; i += every) {
            retArr.push(reversedName.substr(i,every))
        }
        let retStr = retArr.join(" ");
        let retStra = reverseString(retStr);
        return retStra
    }

    return (
        <View style={styles.container}>
            <ScreenTitle text={cityName}/>
            <View style={styles.populationContainer}>
                <Text style={styles.populationTxt}>{"population"}</Text>
                <Text style={[styles.population, {fontWeight:"500"}]}>{formatNumber()}</Text>
                <Text style={styles.populationTxt}>{" "}</Text>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    populationContainer: {
        marginBottom: 10,
        borderWidth: 3,
        borderColor: "black",
        padding: 10,
        width: "90%",
        maxWidth:500,
    },
    population:{
        textAlign: "center",
        fontSize:30,
        fontWeight: "300",
        paddingTop:0,
    },
    populationTxt:{
        textAlign: "center",
        fontSize:14,
        marginBottom: 5,
        fontWeight: "300",
        textTransform:"uppercase",

    }
});

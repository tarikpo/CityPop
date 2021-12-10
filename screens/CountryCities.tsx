import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from '../components/Themed';

import {CityObj, MainStackScreenProps} from '../types';
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";


/**
 * Screen used for showing cities from a chosen country
 * @param route - Used to get the params sent to this screen
 * @param navigation - Used to navigate to next screen
 * @constructor
 */
export default function CountryCities({route, navigation}: MainStackScreenProps<'CountryCities'>) {
    const {data} = route.params;

    const goToCity = (city:CityObj) => {
        navigation.replace("City", {
            cityName: city.name,
            cityPopulation: city.population
        });    }

    return (
        <View style={styles.container}>
            <ScreenTitle text={data[0].countryName}/>
            <FlatList style={styles.list} keyExtractor={(item)=>item.geonameId} data={data} renderItem={({item})=>(
                <Button style={styles.item} onPress={() => goToCity(item)} text={item.name}></Button>
            )}/>
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
    list:{
        width:"100%",
        maxWidth:500,
        borderTopWidth:1,
        paddingTop:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
    },
    item:{
        marginBottom: 5,
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        width: "100%",
        maxWidth:500,
        fontSize:16,
        backgroundColor: "black",
        color: "white",
        alignItems:"center",
    }


});

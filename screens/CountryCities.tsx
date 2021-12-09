import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';

import {MainStackScreenProps} from '../types';
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";

export default function CountryCities({route, navigation}: MainStackScreenProps<'CountryCities'>) {
    const {data} = route.params;


    return (
        <View style={styles.container}>
            <ScreenTitle text={data[0].countryName}/>
            <FlatList keyExtractor={(item)=>item.geonameId} data={data} renderItem={({item})=>(
                <Text style={styles.item}>{item.name}</Text>
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
    item:{

    }


});

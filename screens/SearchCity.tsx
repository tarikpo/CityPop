import * as React from 'react';
import {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View, ScrollView} from 'react-native';
import {MainStackScreenProps} from '../types';
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
// @ts-ignore
import SearchableDropdown from "react-native-searchable-dropdown";


var items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];

interface city {
    id: number,
    name: string,
}


export default function SearchCity({navigation}: MainStackScreenProps<'SearchCity'>) {
    const [city, setCity] = useState<city | null>(null);

    return (
        <KeyboardAvoidingView
            style={styles.avoidView}
            behavior={"height"}
        >
        <View
            style={styles.container}
        >

            <ScreenTitle text={"SEARCH BY CITY"}/>

                <SearchableDropdown
                    selectedItems={city}
                    onItemSelect={(item: city) => {
                        setCity(item);
                        alert(item.id);
                    }}
                    containerStyle={styles.itemsContainer}
                    itemStyle={styles.item}
                    itemTextStyle={{color: '#222'}}
                    itemsContainerStyle={styles.itemContainer}
                    items={items}
                    defaultIndex={1}
                    resetValue={false}
                    textInputProps={
                        {
                            placeholder: "Enter a city",
                            underlineColorAndroid: "transparent",
                            style: {
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                            },
                        }
                    }
                    listProps={
                        {
                            nestedScrollEnabled: true,
                        }
                    }
                />
                <Button text={"sök"} onPress={() => alert("söker")}/>
        </View>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,

    },
    avoidView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "white",

    },
    itemsContainer: {
        width: "90%",
        maxWidth: 500,

    },
    itemContainer: {
        marginTop: 2,
        width: "100%",
        backgroundColor: "yellow",
        height: 150,
        borderRadius: 5,
    },
    item: {
        padding: 10,
        marginTop: 2,
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        width: "100%",
        borderRadius: 5,
    }


});

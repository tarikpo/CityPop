import * as React from 'react';
import {useState} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Pressable, FlatList, LayoutChangeEvent,

} from 'react-native';
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
    const [keyboardUp, setKeyboardUp] = useState<boolean>(false);
    const [titleHeight, setTitleHeight] = useState<number>(0);

    const screenTitleProps:any ={};
    if (keyboardUp){
        screenTitleProps["fontSize"]=20;
        screenTitleProps["paddingBottom"]=5;

    }



    return (
        <KeyboardAvoidingView
            style={keyboardUp? [styles.avoidView,  {paddingTop:titleHeight*1.1}] : styles.avoidView}
            behavior={"position"}
        >
        <View
            style={styles.container}
        >

            <ScreenTitle
                onLayout={(event) => {
                    const {height} = event.nativeEvent.layout;
                    setTitleHeight(height);

                }}
                text={"SEARCH BY CITY"}
                { ...screenTitleProps}
            />

                <SearchableDropdown

                    selectedItems={city}
                    onItemSelect={(item: city) => {
                        setKeyboardUp(false);
                        setCity(item);
                    }}
                    containerStyle={styles.itemsContainer}
                    itemStyle={styles.item}
                    itemTextStyle={{color: '#222'}}
                    itemsContainerStyle={styles.itemContainer}
                    items={items}
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
                            onPressIn: () => {
                                setCity(null);
                                setKeyboardUp(true);
                            }

                        }


                    }
                    listProps={
                        {
                            nestedScrollEnabled: true,
                        }
                    }
                />
            {city&&<Button text={"sök"} onPress={() => alert("söker")}/>}

        </View >
        </KeyboardAvoidingView>

    );
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:width,

    },
    avoidView: {
        flex: 1,
        alignItems: 'center',
        width:"100%",
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
        maxHeight: 300,
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

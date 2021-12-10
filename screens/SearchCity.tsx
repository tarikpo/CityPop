import * as React from 'react';
import {useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import {MainStackScreenProps} from '../types';
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";

// The input will be appended to this constant when fetching
const API_URL = "http://api.geonames.org/searchJSON?&orderby=population&featureClass=P&maxRows=1&style=long&username=weknowit&name_equals="

/**
 * Screen where user can search for a city
 * @param navigation - Used to navigate to next screen
 * @constructor
 */
export default function SearchCity({navigation}: MainStackScreenProps<'SearchCity'>) {
    const [keyboardUp, setKeyboardUp] = useState<boolean>(false);
    const [txtInput, setTxtInput] = useState<string>("");
    const [fetching, setFetching] = useState<boolean>(false);

    // This will be used to modify ScreenTitle when keyboard is visible
    const screenTitleProps: any = {};
    if (keyboardUp) {
        screenTitleProps["fontSize"] = 20;
        screenTitleProps["paddingBottom"] = 5;
    }


    const lookUp = () => {
        setFetching(true);
        setKeyboardUp(false);
        Keyboard.dismiss();

        let url = API_URL + txtInput;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                if (json.totalResultsCount == 0) {
                    alert(txtInput + " does not exist in our database :/")
                } else if (json.totalResultsCount > 0) {
                    //Example input is "Bok"
                    if (json.geonames[0].name !== txtInput) {
                        Alert.alert(
                            "We did not find " + txtInput,
                            "Did you mean " + json.geonames[0].name + "?",
                            [
                                // The "Yes" button
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        navigation.replace("City", {
                                            cityName: json.geonames[0].name,
                                            cityPopulation: json.geonames[0].population
                                        });
                                    },
                                },
                                // The "No" button
                                // Does nothing but dismiss the dialog when tapped
                                {
                                    text: "No",
                                },
                            ]
                        );
                    } else {
                        navigation.replace("City", {
                            cityName: json.geonames[0].name,
                            cityPopulation: json.geonames[0].population
                        });
                    }

                }
            })
            .catch((error) => alert(error))
            .finally(() => {
                setFetching(false)
            });
    }

    return (
        <KeyboardAvoidingView
            style={keyboardUp ? [styles.avoidView, {paddingTop: 180}] : styles.avoidView}
            behavior={"position"}
        >
            <View
                style={styles.container}
            >
                <ScreenTitle
                    text={"SEARCH BY CITY"}
                    {...screenTitleProps}
                />
                <TextInput
                    onPressIn={() => {
                        setKeyboardUp(true);
                    }}
                    onChangeText={(text) => setTxtInput(text)}
                    placeholder={"Enter a city"}
                    style={styles.input}/>

                {fetching && <ActivityIndicator style={styles.loading} size={"large"}/>}

                {txtInput.length > 0 &&
                <Button disabled={fetching} text={fetching ? "Hold on..." : "Look up!"} onPress={lookUp}/>}

            </View>
        </KeyboardAvoidingView>

    )
        ;
}


const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,

    },
    loading: {
        margin: 20
    },
    avoidView: {
        flex: 1,
        alignItems: 'center',
        width: "100%",
        justifyContent: 'flex-start',
        backgroundColor: "white",

    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        width: "90%",
        padding: 15,
        maxWidth: 500,
        marginVertical: 10,
        fontSize: 20,
        textAlign:"center",
    }


});

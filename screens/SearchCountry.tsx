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
import {CityObj, MainStackScreenProps} from '../types';
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";

//max value is 1000 according to the api
const numberOfCities = 10;

// The input will be appended to the constant when fetching
const API_URL_COUNTRY = "http://api.geonames.org/searchJSON?&orderby=relevance&featureClass=P&maxRows=15&style=long&username=weknowit&q=";
// The country code of the chosen country will be appended to the constant when fetching for cities
const API_URL_CITIES = "http://api.geonames.org/searchJSON?&orderby=population&featureClass=P&maxRows="+numberOfCities+"&style=long&username=weknowit&country=";

/**
 * Screen where user can search for a country
 * @param navigation - Used to navigate to next screen
 * @constructor
 */
export default function SearchCountry({navigation}: MainStackScreenProps<'SearchCountry'>) {
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

        let url = API_URL_COUNTRY + txtInput;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                if (json.totalResultsCount == 0) {
                    alert(txtInput + " does not exist in our database :(")
                } else if (json.totalResultsCount > 0) {
                    // Checks if the requested country is found
                    let found: boolean = false;
                    // If country is not found recommend the first country
                    let countryCode: string = json.geonames[0].countryCode;

                    json.geonames.forEach((obj: any) => {
                        if (obj.countryName === txtInput) {
                            found = true;
                            countryCode = obj.countryCode;
                        }
                    })
                    if (!found) {
                        Alert.alert(
                            "We did not find " + txtInput,
                            "Did you mean " + json.geonames[0].countryName + "?",
                            [
                                // The "Yes" button
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        getCities(countryCode).then((cities) => {
                                            navigation.replace("CountryCities", {
                                                data: cities,
                                            });
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
                        getCities(countryCode).then((cities) => {
                            navigation.replace("CountryCities", {
                                data: cities,
                            });
                        });

                    }

                }
            })
            .catch((error) => alert(error))
            .finally(() => {
                setFetching(false)
            });
    }

    /**
     * Fetches for cities of a given country
     * @param countryCode - Code of the country we want to get cities from
     */
    async function getCities(countryCode: string) {
        let reArr: CityObj[];
        let json = await fetch(API_URL_CITIES + countryCode)
            .then((response)=>response.json())
            .catch((error) => alert(error))

        reArr = json.geonames.slice(0, numberOfCities);
        return reArr;
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
                    text={"SEARCH BY COUNTRY"}
                    {...screenTitleProps}
                />
                <TextInput
                    onPressIn={() => {
                        setKeyboardUp(true);
                    }}
                    onChangeText={(text) => setTxtInput(text)}
                    placeholder={"Enter a country"}
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
        textAlign: "center",
    }


});

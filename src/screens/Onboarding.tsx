import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Onboarding = () => {
    const navigation = useNavigation()

    const heading = "Spend Smarter \n Save More"

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexGrow: 1,            // all the available vertical space will be occupied by it
            justifyContent: 'space-between' // will create the gutter between body and footer
        },
        text: {
            alignItems: 'center',
            justifyContent: 'center',
            color: 'green',
            fontWeight: 'bold',
            fontSize: 30,
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'green',
        },
        loginButton: {
            alignItems: 'center',
            paddingVertical: 25,
        },
        buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
    });

    return (
        <View 
        style={styles.container}>
            <View style={{flex: 10}}>
                <Image style= {{flex:1 , width: undefined, height: undefined}}
                source={require('/Users/saurabhdutta/Documents/GitHub/TrackYourExpenses/assets/onboarding.png')} />
            </View>
            <View style={{flex: 6}}>
                <Text
                    style={styles.text}
                > {heading}
                </Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Getting Started</Text>
                </Pressable>
                <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text>Already Have Account? Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Onboarding
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Onboarding = () => {
    const navigation = useNavigation()

    const heading = "Spend Smarter \n Save More"

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-between'
        },
        imageContainer: {
            marginTop: 120,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            textAlign: 'center',
            color: 'green',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 30,
            marginBottom: 30,
        },
        buttonContainer: {
            paddingLeft: 40,
            paddingRight: 40,
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            backgroundColor: 'green',
            marginBottom: 20,
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
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('/Users/saurabhdutta/Documents/GitHub/TrackYourExpenses/assets/onboarding.png')} />
            </View>

            <View style={styles.buttonContainer}>
                <Text
                    style={styles.text}
                > {heading}
                </Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding
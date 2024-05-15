import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComponent from '../components/ButtonComponent';

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
            flex: 1,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center'
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
                <ButtonComponent
                    onPress={() => navigation.navigate('Login')}>
                    Login
                </ButtonComponent>
                <ButtonComponent
                    onPress={() => navigation.navigate('Signup')}>
                    Sign up
                </ButtonComponent>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding
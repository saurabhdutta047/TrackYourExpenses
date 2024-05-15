import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComponent from '../components/ButtonComponent';
import TextFieldComponent from '../components/TextFieldComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
  },
  descriptiontext: {
    marginTop: 10,
  }
});

const Signup = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <Text style={styles.headingText}> Signup Form</Text>
      <Text style={styles.descriptiontext}> You can reach us anytime via saurabh23july@gmail.com</Text>

      <TextFieldComponent name="Enter Your email" type="email-address" secureTextEntry={false}></TextFieldComponent>
      <TextFieldComponent name="Enter Your username" type="default" secureTextEntry={false}></TextFieldComponent>
      <TextFieldComponent name="Enter Your password" type="default" secureTextEntry={true}></TextFieldComponent>
      <TextFieldComponent name="Confirm Your password" type="default" secureTextEntry={true}></TextFieldComponent>
      <TextFieldComponent name="Enter Your Phone Number" type="phone-pad" secureTextEntry={false}></TextFieldComponent>

      <ButtonComponent
        onPress={signupPressed}>
        Sign up
      </ButtonComponent>
      </ScrollView>
    </SafeAreaView>
  )

  function signupPressed() {
    console.log('Signup Pressed')
  }
}

export default Signup
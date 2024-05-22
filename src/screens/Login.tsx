import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const Login = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}> Login Form</Text>
      <Text style={styles.descriptiontext}> You can reach us anytime via saurabh23july@gmail.com</Text>

      <TextFieldComponent name="Enter Your Username" type="default" secureTextEntry={false}></TextFieldComponent>
      <TextFieldComponent name="Enter Your Password" type="default" secureTextEntry={true}></TextFieldComponent>

      <ButtonComponent
        onPress={loginPressed}>
        Login
      </ButtonComponent>
    </View>
  )

  function loginPressed() {
    navigation.navigate('Home', {
      name: 'Welcome to parsing data in the react native application',
    })
  }
}

export default Login
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

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
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 15,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 20,
    fontFamily: 'regular',
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18
  }
});

const Login = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}> Login Form</Text>
      <Text style={styles.descriptiontext}> You can reach us anytime via saurabh23july@gmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your username</Text>
        <TextInput style={styles.inputStyles}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your password</Text>
        <TextInput style={styles.inputStyles}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <ButtonComponent
        onPress={loginPressed}>
        Login
      </ButtonComponent>
    </View>
  )

  function loginPressed() {
    console.log('Login Pressed')
  }
}

export default Login
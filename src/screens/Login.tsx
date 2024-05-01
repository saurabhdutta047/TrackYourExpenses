import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

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
      <Pressable style={styles.button} onPress={loginPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

    </View>
  )

  function loginPressed() {
    console.log('Login Pressed')
  }
}

export default Login
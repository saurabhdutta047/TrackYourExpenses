import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const Signup = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}> Signup Form</Text>
      <Text style={styles.descriptiontext}> You can reach us anytime via saurabh23july@gmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your email</Text>
        <TextInput style={styles.inputStyles}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
        />
      </View>
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
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Confirm your password</Text>
        <TextInput style={styles.inputStyles}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Phone number</Text>
        <TextInput style={styles.inputStyles}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          keyboardType='phone-pad'
        />
      </View>
      <Pressable style={styles.button} onPress={signupPressed}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>

    </SafeAreaView>
  )

  function signupPressed() {
    console.log('Signup Pressed')
  }
}

export default Signup
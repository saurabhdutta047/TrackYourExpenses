import { View, StyleSheet, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
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


const TextFieldComponent = ({name, type, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labels}> {name}</Text>
            <TextInput style={styles.inputStyles}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                keyboardType={type}
            />
        </View>
    );
}

export default TextFieldComponent
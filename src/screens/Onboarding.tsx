import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Button, Text, View } from 'react-native';

const Onboarding = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text> Onboarding </Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default Onboarding
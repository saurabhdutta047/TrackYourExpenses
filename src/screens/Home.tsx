import * as React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({route}) => {
    return (
        <SafeAreaView>
            <Text>{route.params.name}</Text>
        </SafeAreaView>
    )
}

export default Home
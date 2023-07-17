import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigateToAboutScreen }) => {
    const handlePress = () => {
        navigateToAboutScreen();
    };
    return (
        <View style={{ marginTop: '10%' }}>
            <TouchableOpacity onPress={handlePress}>
                <Text>See into the Stars!!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

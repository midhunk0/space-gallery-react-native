import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigateToAboutScreen }) => {
  const data = {
    name: 'John',
    age: 25,
  };

  const handlePress = () => {
    navigateToAboutScreen();
  };

  return (
    <View style={{ marginTop: '10%' }}>
      <Text>Welcome to the Home Screen!</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to About Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

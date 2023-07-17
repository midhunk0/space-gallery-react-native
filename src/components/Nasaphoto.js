import React from 'react';
import { View, Text } from 'react-native';
import { useLocation } from 'react-router-native';

const AboutScreen = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <View>
      <Text>About Screen</Text>
      {data && (
        <View>
          <Text>Name: {data.name}</Text>
          <Text>Age: {data.age}</Text>
        </View>
      )}
    </View>
  );
};

export default AboutScreen;

import React from 'react';
import { View } from 'react-native';
import MainRouter from './src/navigation/Naigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainRouter />
    </View>
  );
}

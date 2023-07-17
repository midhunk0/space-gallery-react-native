import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HomeScreen from '../components/Home';
import AboutScreen from '../components/Nasaphoto';

const App = () => {
  return (
    <NativeRouter>
      <Router/>
    </NativeRouter>
  );
};

const Router = () => {
  const navigateToAboutScreen = () => {
    // Perform navigation to AboutScreen using your preferred method
  };

  return (
    <Routes>
      <Route  path="/" Component={() => <HomeScreen navigateToAboutScreen={navigateToAboutScreen} />} />
      <Route path="/nasaphoto" Component={AboutScreen} />
    </Routes>
  );
};

export default App;

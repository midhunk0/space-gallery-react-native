import React from 'react';
import { NativeRouter, Route, Routes, useNavigate } from 'react-router-native';
import Home from "./components/Home"
import Nasaphoto from './components/Nasaphoto';

function App(){
    return (
        <NativeRouter>
            <Router/>
        </NativeRouter>
    );
};

function Router(){
    const navigate = useNavigate();

    const navigateToAboutScreen = (data) => {
        navigate('/nasaphoto',{state:data});
    };

    return (
        <Routes>
            <Route  path="/" element={<Home navigateToAboutScreen={navigateToAboutScreen} />} />
            <Route path="/nasaphoto" element={<Nasaphoto />} />
        </Routes>
    );
};

export default App;
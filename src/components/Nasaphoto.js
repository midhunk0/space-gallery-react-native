// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_KEY;

const Nasaphoto = () => {
    const [photoData, setPhotoData]=useState(null);
    const navigate=useNavigate()

    useEffect(()=>{
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            // console.log(data);
        }
    });
    if(!photoData) return <></>
    const navigateToHome=()=>{
        navigate("/")
    }
    return (
        <View>
            <Navbar navigateToHome={navigateToHome}/>
            <View style={{marginTop:"10%"}}>
                <Text>{photoData.title}</Text>
                <Text>{photoData.date}</Text>
                <Text>{photoData.explanation}</Text>
                <Image
                    src={photoData.url}
                    alt={photoData.title}
                    style={{ width: 200, height: 200 }}
                />
            </View>
        </View>
    );
};

export default Nasaphoto;

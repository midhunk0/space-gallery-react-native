// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import Navbar from './Navbar';

// const apiKey = process.env.REACT_APP_NASA_KEY;

const styles=StyleSheet.create({
    content:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"rgba(0, 0, 0, 0.895)",
        height:"100%"
    },
    contentTitle:{
        marginTop:"2%",
        color:"rgb(211, 49, 49)"
    },
    contentDate:{
        display:"flex",
        alignItems:"center",
        padding:"2%",
        justifyContent:"space-between",
        color:"rgb(211, 49, 49)"
    },
    contentExplanation:{
        marginTop:"2%",
        color:"rgb(238, 226, 210)"
    },
    contentImage:{
        width:"100%",
        height:"25%",
        resizeMode:'cover'
    },
})

function Nasaphoto(){
    // const [photoData, setPhotoData]=useState(null);
    const navigate=useNavigate()

    // useEffect(()=>{
    //     fetchPhoto();
    //     async function fetchPhoto(){
    //         const res = await fetch(
    //             `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    //         );
    //         const data = await res.json();
    //         setPhotoData(data);
    //         // console.log(data);
    //     }
    // });
    // if(!photoData) return <></>
    const navigateToHome=()=>{
        navigate("/")
    }
    return (
        <View >
            <Navbar navigateToHome={navigateToHome}/>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Galaxy</Text>
                <Text style={styles.contentDate}>2023-19-07</Text>
                <Text style={styles.contentExplanation}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Image
                    source={require("../assets/galaxy.jpg")}
                    alt="photo of galaxy"
                    style={styles.contentImage}
                />
            </View>
        </View>
    );
};

export default Nasaphoto;
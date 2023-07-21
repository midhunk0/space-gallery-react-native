// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigate } from 'react-router-native';
import Navbar from './Navbar';
import {REACT_APP_NASA_KEY} from "@env"

const apiKey = REACT_APP_NASA_KEY

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
    const [photoData, setPhotoData]=useState("");
    const [loading, setLoading]=useState(true)
    const navigate=useNavigate()

    useEffect(()=>{

        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        const fetchData=async()=>{
            const response=await fetch(apiUrl)
            if(!response.ok){
                throw new Error("request failed with status", response.status)
            }
            const data=await response.json();
            setPhotoData(data)
            console.log(data)
            setLoading(false);
        }
        fetchData();
    },[])

    const navigateToHome=()=>{
        navigate("/")
    }

    if(loading){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View >
            <Navbar navigateToHome={navigateToHome}/>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>{photoData.title}</Text>
                <Text style={styles.contentDate}>{photoData.date}</Text>
                <Text style={styles.contentExplanation}>{photoData.explanation}</Text>
                <Image
                    source={{uri:photoData.url}}
                    alt="photo of galaxy"
                    style={styles.contentImage}
                />
            </View>
        </View>
    );
};

export default Nasaphoto;
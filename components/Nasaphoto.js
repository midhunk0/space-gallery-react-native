// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
import Navbar from './Navbar';
import {REACT_APP_NASA_KEY} from "@env";

const apiKey = REACT_APP_NASA_KEY

const styles=StyleSheet.create({
    content:{
        backgroundColor:"rgba(0, 0, 0, 0.895)",
        height:"100%"
    },
    contentTitle:{
        margin:"2%",
        color:"rgb(211, 49, 49)",
        fontSize:19,
        fontWeight:"bold",
        fontFamily:"monospace"
    },
    contentDate:{
        padding:"2%",
        color:"rgb(211, 49, 49)",
        fontSize:11,
        fontWeight:"bold",
        fontFamily:"monospace"
    },
    contentExplanation:{
        margin:"2%",
        color:"rgb(238, 226, 210)",
        fontSize:12,
        fontFamily:"monospace"
    },
    contentImage:{
        margin:"1%",
        height:200,
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

    return (
        <View style={{ flex: 1 }}> 
            <Navbar navigateToHome={navigateToHome} />
            {loading ? (
                <View style={{justifyContent:"center", alignItems:"center", flex:1, backgroundColor:"rgba(0, 0, 0, 0.895)"}}>
                    <ActivityIndicator size="large"/>
                </View>
            ) : (
                <ScrollView style={styles.content}>
                    <Text style={styles.contentTitle}>{photoData.title}</Text>
                    <Text style={styles.contentDate}>{photoData.date}</Text>
                    <Text style={styles.contentExplanation}>{photoData.explanation}</Text>
                    <Image
                        source={{ uri: photoData.url }}
                        alt="photo of galaxy"
                        style={styles.contentImage}
                    />
                    <Text style={styles.contentExplanation}>{photoData.explanation}</Text>
                </ScrollView>
            )}
        </View>
    );
};

export default Nasaphoto;
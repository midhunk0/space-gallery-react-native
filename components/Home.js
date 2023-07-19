import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    home:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        backgroundColor:"rgba(0, 0, 0, 0.895)",
        marginTop:"7%"
    },
    homeButton:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(211, 49, 49)",
        width:"50%",
        height:"7%",
        borderRadius:40,
        marginBottom:"7%"
    },
    buttonText:{
        color:"rgb(238, 226, 210)"
    }
})

function Home({ navigateToAboutScreen }){
    const handlePress = () => {
        navigateToAboutScreen();
    };
    return (
        <View style={styles.home}>
            <TouchableOpacity style={styles.homeButton} onPress={handlePress}>
                <Text style={styles.buttonText}>See into the Stars!!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
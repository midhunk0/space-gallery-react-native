import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles=StyleSheet.create({
    navbar:{
        display:"flex",
        justifyContent:"space-between",
        padding:"3%",
        backgroundColor:"rgba(19, 18, 18, 0.705)",
        marginTop:"7%",
    },
    narbarLogo:{
        alignItems:"flex-start",
        color:"rgb(238, 226, 210)",
        fontSize:18,
        fontFamily:"monospace",
        fontWeight:"bold"
    },
    navbarItem:{
        marginTop:"-6%",
        alignItems:"flex-end",
    },
    navbarText:{
        color:"rgb(238, 226, 210)",
        fontFamily:"monospace"
    }
})

function Navbar({ navigateToHome }){
    const handlePress=()=>{
        navigateToHome();
    }
    return(
        <View style={styles.navbar}>
            <Text style={styles.narbarLogo}>Photo of the day</Text>
            <TouchableOpacity style={styles.navbarItem} onPress={handlePress}>
                <Text style={styles.navbarText}>Take me Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navbar;
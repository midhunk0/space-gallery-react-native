import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Navbar({ navigateToHome }){
    const handlePress=()=>{
        navigateToHome();
    }
    return(
        <View style={{marginTop:"10%", display:"flex", justifyContent:"space-between"}}>
            <Text>Photo of the day</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text>take me Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navbar;
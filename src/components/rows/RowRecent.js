import React, { useState } from 'react';
import { View, TouchableOpacity,Text, Image, Dimensions } from 'react-native'


const { width } = Dimensions.get('window')
const imgHeight = width / 3 + width / 8
const imgWidth = width / 3

function RowRecent({ item, index, onPressRecent,percent }) {

    
    //alert(JSON.stringify(item))
    return (

        <TouchableOpacity  style={{height:60,padding:15,}} 
        activeOpacity={.5}  
        onPress={()=>{
            alert("yes check it")
        }}
            >

    <Text style={{width:'100%',}}>{item}</Text>

        </TouchableOpacity>

    )
}

export default RowRecent;
import React, { useEffect } from 'react';
import {
    View,
    StatusBar, TouchableOpacity, Text
} from 'react-native';
import * as Utils from '../../utility'

const WelComePage = ({ navigation }) => {


    useEffect(() => {


    })
    return (

        // <ImageBackground source={Utils.ImgPath.IMG_SLASH} style={styles.imgBg} >
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <StatusBar hidden></StatusBar>
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
              
            <View style={{flex:1,marginRight:5}}>
                <TouchableOpacity style={{backgroundColor:'red',height:60,justifyContent:'center',alignItems:'center',padding:10}} 
                onPress={()=>{
                    //console.warn("click me");
                    navigation.navigate(Utils.Constants.SCREEN_ANGLE_PAGE);
                    
                }}
                >
                    <Text >{"Assigmment First"}</Text>
                </TouchableOpacity>
                </View>
              
               <View style={{flex:1,marginRight:5}}>
                <TouchableOpacity style={{backgroundColor:'red',height:60,justifyContent:'center',alignItems:'center',padding:10}} 
                onPress={()=>{
                    //console.warn("click me");
                    navigation.navigate(Utils.Constants.KEY_APP);
                    
                }}
                >
                    <Text >{"Assigmment Second"}</Text>
                </TouchableOpacity>
                </View>
           <View style={{flex:1}}>
           <TouchableOpacity style={{backgroundColor:'red',height:60,justifyContent:'center',alignItems:'center',padding:10}}
            onPress={()=>{
                //console.warn("click me");
                navigation.navigate(Utils.Constants.SCREEN_HOC_CALLER);
                
            }}>
                    <Text>{"Assigmment Third"}</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        // </ImageBackground>

    );
}

export default WelComePage;
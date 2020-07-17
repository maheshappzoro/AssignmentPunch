import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native'


const { width } = Dimensions.get('window')
const imgHeight = width / 3 + width / 8
const imgWidth = width / 3

function RowHoc({ item, index, onPressVideo,percent }) {

    
    //alert(JSON.stringify(item))
    return (

        <TouchableOpacity  style={{}} activeOpacity={1}
            >

            {/* start row 1 */}
            <Image
                source={{
                    uri: "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/06/1b/3f/061b3f8a-8dda-270f-5815-9732670b9189/source/100x100bb.jpg",
                    priority: 'high'
                }}
                style={{
                    width: '100%', height: imgHeight,
                  
                }}
            />

           

          
            <View style={{ backgroundColor:'black',height:50,justifyContent:'center',alignItems:'flex-start'}}>
            <View style={{width:percent, backgroundColor:'red',height:20}}></View>
            </View>

        </TouchableOpacity>

    )
}

export default RowHoc;
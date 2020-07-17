import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import RegularText from '../common/RegularText';
import { IMAGE_LIKE_BORDER, IMG_EYE } from '../../utility/imageRes';
import { stylesHome } from '../../utility/styles';
import { FONT_FAMILY_HEEBO_REGULAR } from '../../utility/Typography';


const { width } = Dimensions.get('window')
const imgHeight = width / 3 + width / 8
const imgWidth = width / 3

function RowHome({ item, index, onPressVideo }) {

    const [] = useState(item.isOpen)
    //alert(JSON.stringify(item))
    return (

        <TouchableOpacity key={index.toString()} style={{}} activeOpacity={.7}
            onPress={() => onPressVideo(item, index)}>

            {/* start row 1 */}
            <Image
                source={{
                    uri: item.artworkUrl100,
                    priority: 'high'
                }}
                style={{
                    width: imgWidth, height: imgHeight,
                    marginRight: ((index + 1) % 3 === 0) && index != 0 ? 0 : .5, marginBottom: .5
                }}
            />

           

          
            <View style={{ right: 2, position: 'absolute', bottom: 0, padding: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                
                {<RegularText
                    title={item.artistName}
                    textStyle={[stylesHome.mediumTextStyle, {fontSize:20,textAlign:'center',color:'green'}]}
                    // font={FONT_FAMILY_HEEBO_REGULAR}
                />}

            </View>
        </TouchableOpacity>

    )
}

export default RowHome;
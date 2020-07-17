import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import RegularText from '../common/RegularText';
import { IMAGE_LIKE_BORDER, IMG_EYE } from '../../utility/imageRes';
import { stylesHome } from '../../utility/styles';
import { FONT_FAMILY_HEEBO_REGULAR } from '../../utility/Typography';


const { width } = Dimensions.get('window')
const imgHeight = width / 3 + width / 8
const imgWidth = width / 3

function RowMyVideos({ item, index, onPressVideo, onLongPress }) {

    const [] = useState(item.isOpen)
    //alert(JSON.stringify(item))
    return (

        <TouchableOpacity
            key={index.toString()} style={{}} activeOpacity={.7}
            onPress={() => onPressVideo(item, index)}
            onLongPress={() => onLongPress(item, index)}
        >

            {/* start row 1 */}
            <Image
                source={{
                    uri: item.thumbnail,
                    priority: 'high'
                }}
                style={{
                    width: imgWidth, height: imgHeight,
                    marginRight: ((index + 1) % 3 === 0) && index != 0 ? 0 : .5, marginBottom: .5
                }}
            />

            {/* <Video
                source={{ uri: item.video, cache: true }}
                style={{
                    width: imgWidth,
                    height: imgHeight,
                    marginRight: ((index + 1) % 3 === 0) && index != 0 ? 0 : .5,
                    marginBottom: .5
                }}
                repeat={false}
                resizeMode='cover'
                paused={true}
            /> */}

            <View style={{ marginLeft: 2, position: 'absolute', bottom: 0, padding: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Image source={IMAGE_LIKE_BORDER} style={{ marginRight: 5 }} ></Image>
                {<RegularText
                    title={item.likes}
                    textStyle={[stylesHome.mediumTextStyle, {}]}
                    font={FONT_FAMILY_HEEBO_REGULAR}
                />}
            </View>
            <View style={{ right: 2, position: 'absolute', bottom: 0, padding: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={IMG_EYE} style={{ marginRight: 5 }} ></Image>
                {<RegularText
                    title={item.views}
                    textStyle={[stylesHome.mediumTextStyle, {}]}
                    font={FONT_FAMILY_HEEBO_REGULAR}
                />}

            </View>
        </TouchableOpacity>

    )
}

export default RowMyVideos;
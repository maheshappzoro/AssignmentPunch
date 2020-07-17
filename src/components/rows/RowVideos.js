import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import colors from '../../utility/Colors';
import RegularText from '../common/RegularText';
import { getMinFromSec } from '../../utility/Utils'

const { width } = Dimensions.get('window')
const imgHeight = width / 3 + width / 8
const imgWidth = width / 3

function RowVideo(
    {
        item,
        index,
        onPressVideo
    }) {
    return (
        <TouchableOpacity
            key={index.toString()}
            style={{}} activeOpacity={.7}
            onPress={() => onPressVideo(item)}
        >
            <Image
                source={{
                    uri: item.node.image.uri,
                }}
                style={{
                    width: imgWidth, height: imgHeight,
                    marginRight: ((index + 1) % 3 === 0) && index != 0 ? 0 : .5, marginBottom: .5
                }}

            />
            <View style={{ position: 'absolute', bottom: 0 }}>
                <RegularText
                    title={getMinFromSec(item.node.image.playableDuration)}
                    textStyle={{
                        color: colors.white,
                        marginBottom: 5,
                        marginLeft: 5
                    }}
                />
            </View>
        </TouchableOpacity>

    )
}

export default RowVideo;
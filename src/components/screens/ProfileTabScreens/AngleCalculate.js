import React, { useState, useEffect } from 'react';
import { View ,Text} from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../../../utility/Colors';
import LinearGradient from 'react-native-linear-gradient';



const AngleCalculate = () => {

    const [] = useState(1 + "%")
    const [] = useState(1)



    useEffect(() => {



        return () => {

        }

    }, [])


    function angleCalculate(hour, mints) {

        if (hour < 0 || mints < 0 || hour > 12 || mints > 60)
            System.out.println("Wrong input");

        if (hour == 12)
            hour = 0;
        if (mints == 60) {
            mints = 0;
            hour += 1;
            if (hour > 12)
                hour = hour - 12;
        }


        // Calculate the angles moved by hour and minute hands 
        // with reference to 12:00 
        let hour_angle = parseInt(0.5 * (hour * 60 + mints));
        let minute_angle =parseInt(6 * mints);

        // Find the difference between two angles 
        let angle = Math.abs(hour_angle - minute_angle);

        // smaller angle of two possible angles 
        angle = Math.min(360 - angle, angle);

        console.warn("angle====",angle);
        

        return angle;

    }



    return (

        <View style={{ padding: 0, flexDirection: 'column', flex: 1, paddingVertical: 0, justifyContent: 'flex-start' }}>



            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.headerColor1, colors.headerColor2,]}
                style={{
                    flex: 1,
                    maxHeight: 55,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>

            </LinearGradient >



            <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>

               <Text style={{fontSize:25}}>
                   { "The Angle Value Is="+ angleCalculate(4,13)}
               </Text>

            </View>

        </View>

    );
}

export default AngleCalculate;
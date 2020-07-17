import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, TouchableOpacity,TextInput,Image } from 'react-native';
import * as Utils from '../../../utility';
 import RowHome from '../../rows/RowHome';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchAction } from '../../../actions/action'
import { FROM_HOME_SCREEN, DIMENS } from '../../../utility/constants';
import colors from '../../../utility/Colors';
import RegularText from '../../common/RegularText';
 import CustomLoader from '../../common/CustomLoader'
 import LinearGradient from 'react-native-linear-gradient';
 
 import { IMG_SEARCH } from '../../../utility/imageRes';
import RowHoc from '../../rows/RowHoc';


const HocPageCaller = ({ navigation }) => {

    const dispatch = useDispatch();
    const [percentText, setPercentText] = useState(1+"%")
    const [count, setCount] = useState(1)

   

    useEffect(() => {

        let count=0;
        let interval = setInterval(
            () => {


            setPercentText((count) +"%")
            count++;
            if(count==102){
                clearInterval(interval);
                console.warn("dismiss ");
                
            }
        },
            102
          );

        return () => {
            clearInterval(interval);
        }

    }, [])


  

    return (

        <View style={{ padding: 0,flexDirection:'column', flex: 1, paddingVertical: 0, justifyContent: 'flex-start' }}>
           
          

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


           
            <View style={{flex:1}}>
              
              <RowHoc
              percent={percentText}
              ></RowHoc>

            </View>
           
        </View>

    );
}

export default HocPageCaller;
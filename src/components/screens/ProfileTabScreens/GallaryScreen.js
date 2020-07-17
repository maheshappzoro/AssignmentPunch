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


const Home = ({ navigation }) => {

    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('')

    const [] = useState(undefined)
    const [] = useState(false)
    const [] = useState(0)

    const {  fetching, catFetching ,artistList} = useSelector(state => ({
      
        fetching: state.searchReducer.fetching,
        error: state.searchReducer.error,
        artistList: state.searchReducer.artistList,
    }), shallowEqual)

    useEffect(() => {


        return () => {
           
        }

    }, [])


    function onPressSearch() {

        let searchQuery = {
            search: searchText
        }

       dispatch(searchAction(searchQuery))
       console.warn("searchText==",searchText);
       
       // setSearchText('')
    }


    function onChangeSearchText(text) {
        setSearchText(text)
    }

    function onPressVideo(item, index) {
        navigation.navigate(Utils.Constants.SCREEN_SHOW_VIDEO, { video: item, index: index, FROM_SCREEN_TYPE: FROM_HOME_SCREEN })
    }

    function renderEmptyDataScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <RegularText
                    title={"nothing to show"}
                    textStyle={{ fontSize: 14 }}
                />
            </View>
        )
    }
    {
        console.warn("artistList=====",artistList!=undefined?artistList.data.results:'');
        
    }

    return (

        <View style={{ padding: 0,flexDirection:'column', flex: 1, paddingVertical: 0, justifyContent: 'flex-start' }}>
           
            {/* <CommonHeaderTitleWithButton title={"Gallery"}></CommonHeaderTitleWithButton> */}

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
                <View
                    style={{
                        flexDirection: 'row',
                        flex: .95,
                        alignSelf: 'center',
                        //justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.white,
                        borderRadius: DIMENS.INPUT_FIELD_BORDER_RADIUS,
                        height: DIMENS.searchInptH + 5,
                        paddingHorizontal: 10
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <TextInput
                            style={[{ textAlign: 'left', marginHorizontal: 5 }]}
                            keyboardType={Utils.Constants.KB_TYPE_DEFAULT}
                            onSubmitEditing={() => onPressSearch()}
                            value={searchText}
                            onChangeText={value => onChangeSearchText(value)}
                            placeholder={"Search"}
                            returnKeyType={"search"}
                        />
                    </View>
                    <TouchableOpacity style={{
                        padding: 5
                    }}
                        onPress={() => onPressSearch()}
                    >
                        <Image
                            source={IMG_SEARCH}
                            resizeMode={'contain'}
                            style={{
                                width: 15,
                                height: 15,
                            }} >
                        </Image>
                    </TouchableOpacity>
                </View>
            </LinearGradient >


           
            <View style={{flex:1}}>
                {
                      artistList != undefined &&  artistList.data.results!=undefined && artistList.data.results!=undefined &&
                    <FlatList
                        data={artistList.data.results}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 60 }}
                        ListEmptyComponent={renderEmptyDataScreen}
                        refreshControl={
                            <RefreshControl
                                refreshing={fetching != undefined && fetching}
                               onRefresh={() => onPressSearch()}
                            />
                        }
                        renderItem={({ item, index }) => {
                            //alert(JSON.stringify(item))
                            console.warn("item=====",item);
                            
                            return (
                                <RowHome
                                    index={index}
                                    item={item}
                                    onPressVideo={onPressVideo}
                                />
                            
                            )
                        }} />
                }
            </View>
            {
                catFetching &&
                <CustomLoader />
            }
        </View>

    );
}

export default Home;
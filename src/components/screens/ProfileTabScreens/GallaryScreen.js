import React, { useState, useEffect } from 'react';
import { View, FlatList, RefreshControl, TouchableOpacity, TextInput, Image } from 'react-native';
import * as Utils from '../../../utility';
import RowHome from '../../rows/RowHome';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchAction } from '../../../actions/action'
import { DIMENS } from '../../../utility/constants';
import colors from '../../../utility/Colors';
import RegularText from '../../common/RegularText';
import CustomLoader from '../../common/CustomLoader'
import LinearGradient from 'react-native-linear-gradient';

import { IMG_SEARCH } from '../../../utility/imageRes';
import { storeItem } from '../../../utility/CustomAsyncStorage';


const Home = () => {

    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('')

    const [] = useState(undefined)
    const [isFocus, setFocus] = useState(false)
    const [recentSearch, setRecentSearch] = useState([])
    const [] = useState(0)

    const { fetching, catFetching, artistList } = useSelector(state => ({

        fetching: state.searchReducer.fetching,
        error: state.searchReducer.error,
        artistList: state.searchReducer.artistList,
    }), shallowEqual)

    useEffect(() => {
      
        Utils.CustomStorage.retrieveItem(Utils.CustomStorage.SAVED_SEARCH).then((data) => {
           
            if (data != undefined && data.length > 0) {
                setRecentSearch(data)
            }
        }
        );

        return () => {

        }

    }, [])


    function onPressSearch() {

        let searchQuery = {
            search: searchText
        }

        dispatch(searchAction(searchQuery))
        setFocus(false)
        Utils.CustomStorage.retrieveItem(Utils.CustomStorage.SAVED_SEARCH).then((data) => {

        
            if (searchText != undefined && searchText != "") {
                let oldArray = data
                if (oldArray == undefined) {
                    oldArray = [];
                    oldArray.push(searchText)
                } else {

                    for (const key in oldArray) {
                        if (oldArray.hasOwnProperty(key)) {
                            const element = oldArray[key];
                            if (element == searchText) {
                                oldArray.splice(key, 1);
                            }

                        }
                    }

                    let newArray = [...oldArray, searchText]
                    oldArray = newArray;
                }
                storeItem(Utils.CustomStorage.SAVED_SEARCH, oldArray)
                setRecentSearch(oldArray)
            }
        }).catch(() => {

        })

    }


    function onChangeSearchText(text) {
        setSearchText(text)
    }

    function onPressVideo() {

       
    }
    
    function onRecentClick(item){

      //  setRecentSearch(item)
      let searchQuery = {
        search: item
    }
    setFocus(false)
        dispatch(searchAction(searchQuery))
      
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

   
    return (

        <View style={{ padding: 0, flexDirection: 'column', flex: 1, paddingVertical: 0, justifyContent: 'flex-start' }}>

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
                            onFocus={() => {
                                setFocus(true)

                            }}
                           // onBlur={() => setFocus(false)}
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


            {
                 isFocus===false &&   artistList != undefined && artistList.data.results != undefined && artistList.data.results != undefined &&
            <View style={{ flex: 1 }}>
               
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

                            return (
                                <RowHome
                                    index={index}
                                    item={item}
                                    onPressVideo={onPressVideo}
                                />

                            )
                        }} />
               
            </View>
             }
            {
                isFocus && recentSearch != undefined &&
                <View style={{ flex: 1,}}>
 
                    <RegularText
                        title={"Recent search items"}
                        textStyle={{ fontSize: 16, color: colors.textColor, paddingHorizontal: 10, height: 20, marginTop: 15, textAlign: 'center', }}
                    />
                    
                    
                    <FlatList
                        data={recentSearch}

                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={true}
                        contentContainerStyle={{ paddingBottom: 60 }}
                        ListEmptyComponent={renderEmptyDataScreen}

                        renderItem={({ item, index }) => {

                            return <View style={{height:60}} key={index.toString()} >
                                    <TouchableOpacity 
                               // onPress={() =>onRecentClick(item)}
                               onPress={() => {
                                onRecentClick(item)
                               
                               }}
                                
                                style={{ height: 60, justifyContent: 'center', alignItems: 'flex-start' }}
                                >
                                    <RegularText
                                        title={item}
                                        textStyle={{ fontSize: 16, color: colors.textColor, paddingHorizontal: 10, }}
                                    />
                                    </TouchableOpacity>
                                </View>
                        }} />

                </View>
            }

            {
                catFetching &&
                <CustomLoader />
            }
        </View>

    );
}

export default Home;
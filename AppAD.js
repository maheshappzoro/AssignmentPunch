/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  Platform,
  Alert
} from 'react-native';

import 'react-native-gesture-handler';
import Navigator from './src/navigations';
import configureStore from './src/ConfigStore';
import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import colors from './src/utility/Colors';
import { SafeAreaView } from 'react-navigation';
import NavigationService from './src/NavigationService'


//enableScreens();
const store = configureStore();

const App = () => {




  useEffect(() => {
    
    return () => {

    }
  }, [])

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.STATUS_BAR_COLOR }} forceInset={{ bottom: 'always' }}>
        <StatusBar backgroundColor={colors.STATUS_BAR_COLOR} barStyle="dark-content" />
        <Provider store={store}>
          {/* <NavigationContainer > */}
          <Navigator
            ref={navigationRef => {
              NavigationService.setTopLevelNavigator(navigationRef, (this))
            }}>
          </Navigator>
          {/* </NavigationContainer> */}
          <FlashMessage position="top" />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;

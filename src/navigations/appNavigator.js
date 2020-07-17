import { createStackNavigator } from 'react-navigation-stack';
import * as Utils from '../utility';

import {SCREEN_GALLARY, SCREEN_HOC_CALLER, SCREEN_ANGLE_PAGE } from '../utility/constants';

import GallaryScreen from '../components/screens/ProfileTabScreens/GallaryScreen';

import HocPageCaller from '../components/screens/ProfileTabScreens/HocPageCaller';
import AngleCalculate from '../components/screens/ProfileTabScreens/AngleCalculate';

const RouteConfig = {
  
  [SCREEN_GALLARY]: GallaryScreen,
  [SCREEN_HOC_CALLER]: HocPageCaller,
  [SCREEN_ANGLE_PAGE]: AngleCalculate
};

const APPNavigatorConfig = {
  initialRouteName: Utils.Constants.SCREEN_GALLARY,
  header: null,
  headerMode: 'none'
};

const APPNavigator = createStackNavigator(RouteConfig, APPNavigatorConfig)

export default APPNavigator;

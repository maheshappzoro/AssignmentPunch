import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import WelComePage from '../components/screens/WelComePage';

import * as Utils from '../utility';
import APPNavigator from './appNavigator';
// import AuthNavigator from './authNavigator';


const RootNavigator = createSwitchNavigator({
    [Utils.Constants.KEY_WELCOME]: WelComePage,
    // [Utils.Constants.KEY_AUTH]: AuthNavigator,
     [Utils.Constants.KEY_APP]: APPNavigator
}, {
    initialRouteName: Utils.Constants.KEY_WELCOME
});


export default createAppContainer(RootNavigator);
import { all, takeLatest } from 'redux-saga/effects';
import * as Utils from '../utility';
import {  getGallaryVideosAction } from './gallarySaga';
import { searchAction} from './searchSaga';


function* watchSearchAction() {
    console.warn("watchSearchAction==");
    
    yield takeLatest(Utils.ApiTypes.API_SEARCH_METHOD, searchAction)
}



function* watchGetGallaryVideosAction() {
    yield takeLatest(Utils.ApiTypes.API_GET_GALLARY_VIDEOS_METHOD, getGallaryVideosAction)
}


function* rootSaga() {
    yield all([
        watchSearchAction(),
        watchGetGallaryVideosAction(),
    ])
}

export default rootSaga;
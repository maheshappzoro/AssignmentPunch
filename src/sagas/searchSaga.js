import { put, takeLatest, all } from 'redux-saga/effects';
import * as Utils from '../utility';
import callApis from '../services/apiCall';



export function* searchAction(action) {
    try {
       
        action.search=action.payload.search
        delete action.payload
       // console.warn("action==searchAction========",action);
       
        
        const data = yield callApis(action)
       // console.warn("data======",data);
        
        yield put({ type: Utils.ApiTypes.API_SEARCH_SUCCESS, payload: data })
    } catch (e) {
        yield put({ type: Utils.ApiTypes.API_SEARCH_FAILURE })
    }
}

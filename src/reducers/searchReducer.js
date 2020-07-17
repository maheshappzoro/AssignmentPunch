import * as Utils from '../utility';

export default function searchReducer(state = {}, action) {

    switch (action.type) {
        case Utils.ApiTypes.API_SEARCH_METHOD:
            return { ...state, fetching: true, error: null };
            break;
        case Utils.ApiTypes.API_SEARCH_SUCCESS:
            
               
           return { ...state, fetching: false, error: null, artistList: action.payload };
            break;
        case Utils.ApiTypes.API_SEARCH_FAILURE:
              
            return { ...state, fetching: false, error: action.error, artistList: null };
            break;
        case Utils.ApiTypes.API_SEARCH_CLEAR:
            return { ...state, fetching: false, error: action.error, artistList: undefined };
            break;
        default:
            return state;
    }
}
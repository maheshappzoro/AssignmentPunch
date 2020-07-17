import * as Utils from '../utility';


export function getGallaryCategoriesAction(action) {
    return {
        type: Utils.ApiTypes.API_GET_GALLARY_CATEGORY_METHOD,
        payload: action
    }
}

export function clearGetGallaryCategoriesAction() {
    return {
        type: Utils.ApiTypes.API_GET_GALLARY_CATEGORY_CLEAR,
    }
}

export function getGallaryVideosAction(action) {
    return {
        type: Utils.ApiTypes.API_GET_GALLARY_VIDEOS_METHOD,
        payload: action
    }
}
export function searchAction(action) {
    console.warn("action11===",action);
    
    return {
        type: Utils.ApiTypes.API_SEARCH_METHOD,
        payload: action
    }
}

// export function cleargetGallaryVideosAction() {
//     return {
//         type: Utils.ApiTypes.API_GET_GALLARY_VIDEOS_CLEAR,
//     }
// }

import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';
import flashMessage from "../components/common/CustomFlashAlert";
import { DEVICE_ID, DEVICE_TOKEN, USER_TOKEN, KEY_USER_DATA } from "../utility/constants";
import { USER_DATA } from "../utility/CustomAsyncStorage";
import { API_EDIT_PROFILE_METHOD } from "../utility/ApiTypes";

export default async (method) => {
    let networkStatus = undefined;
    await NetInfo.fetch().then(state => {
        console.log('NETINFO ME AAYA')
        networkStatus = state.isConnected;
    });
    if (networkStatus != undefined && networkStatus) {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                if (method.payload == undefined) {

                    let search=method.search
                    let final=method.type + search
                    return resolve(await getApiCall(final));
                } else {
                    return resolve(await getPostApiCall(method));
                }
            }, 100);
        })
    } else {
        return flashMessage("You are offline.", "danger");;
    }
}


export async function getApiCall(url) {
    console.warn('url :::: ', url)
    try {
        let responseJson=  await   axios.get(url)
    
        
         return responseJson;
    } catch (error) {
        console.error(error);
    }
}


export async function getApiCall22(url) {
    console.warn('url :::: ', url)
    try {
        let response = await fetch(url, {
            method: 'GET',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'multipart/form-data'
            // }
            //headers: headers,
            headers: {
                'Content-Type': 'multipart/form-data',
                //'boundary': '9ce37efc-88ba-484f-b8eb-b312d3895c00'
            }
        })
        let responseJson = await response.json();
        console.warn("responseJson=======",responseJson);
        
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

async function getPostApiCall(method) {
    console.log(" Api Type : ", method.type + '   requestData :::: ', JSON.stringify(method.payload));
    let formData = new FormData();

    try {
        for (const [key, value] of Object.entries(method.payload)) {
            formData.append(`${key}`, value);
        }
        let response = await fetch(method.type, {
            method: 'POST',
            headers: {
               
            },
            body: formData
        })
        let responseJson = await response.json();
        console.log('response>>>>>>>>>>', responseJson)
        return responseJson;
    } catch (error) {
        console.warn(error)
        if (method != API_EDIT_PROFILE_METHOD) {
            flashMessage(error.message, "danger");
        }
    }
}
import {GET_USERS, REGISTER_USER, LOGOUT_USER, USERS_ERROR} from '../types'
import axios from 'axios'

import cookieStorageService from 'Services/storage/cookieStorage';

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`${process.env.API_URL}all/`);
        dispatch( {
            type: GET_USERS,
            payload: res.data
        });
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        });
    }

}

export const registerUser = (oauthResponse, provider) => async dispatch => {
    try {
        const res = await axios.post(`${process.env.API_URL}convert-token`, {
            token: oauthResponse.accessToken,
            backend: provider,
            grant_type: "convert_token",
            client_id: process.env.API_CLIENT_ID,
            client_secret: process.env.API_CLIENT_SECRET
        });

        
        const consolidatedData = {...oauthResponse, ...res.data};
        cookieStorageService.setToken(consolidatedData);
        const cur_user_details = await axios.get(`${process.env.API_URL}me/`);
        cookieStorageService.setUser(cur_user_details.data);
        dispatch( {
            type: REGISTER_USER, 
            payload: cur_user_details.data
        });        
    }
    catch (error) {
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        });
    }
};


export const logoutUser = ()  => async dispatch => {
    cookieStorageService.logoutUser();
    dispatch({
        type: LOGOUT_USER,
    });
}
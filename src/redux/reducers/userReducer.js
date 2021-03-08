import {GET_USERS, REGISTER_USER, LOGOUT_USER, USERS_ERROR} from '../types'
import cookieStorageService from 'Services/storage/cookieStorage';

const initialState = {
    users:[],
    user: cookieStorageService.getUser(),
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false

            }
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload,
                loading:false
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: {}
            };
        case USERS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}
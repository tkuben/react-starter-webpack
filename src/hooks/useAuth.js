import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function useAuth(url = '', redirect = true) {
    console.log('useAuth:Hook');
    //TODO url will be used to validate if the user has access to this url.
    const { user = {} } = useSelector(state => state.userReducer) || {};
    let history = useHistory();
    if(redirect && (!user || Object.entries(user).length === 0)) {
        //TODO set error msg that user is trying to access protected zones.
        history.push('/login');
    }
    return user;
}

export default useAuth;
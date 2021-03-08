import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ReactFacebookLogin from "react-facebook-login";
import ReactGoogleLogin from "react-google-login";

import { registerUser, logoutUser } from 'Actions/userActions';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));


export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userReducer) || {};

    function responseFb(response) {
        dispatch(registerUser(response, 'facebook'));
    }

    function responseGoogle(response) {
        dispatch(registerUser(response, 'google-oauth2'));
    }

    function logout() {
        dispatch(logoutUser());
    }
    
    return (
    <>
        {user && user.first_name ? 
            <>
                <h1>Hello {user.first_name} ({user.email})</h1>
                <Button variant="contained" onClick={logout}>Logout</Button>
            </>
            : 
            <>
                <ReactFacebookLogin
                    appId={process.env.FB_APP_ID}
                    fields="name,email"
                    callback={responseFb}
                />
                <ReactGoogleLogin
                clientId={process.env.GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                />
            </>
        }
        
    </>
    );
};

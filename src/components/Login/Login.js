import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import ReactFacebookLogin from "react-facebook-login";
import { TiSocialFacebook } from "react-icons/ti";
import ReactGoogleLogin from "react-google-login";


//MUI
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

//application imports
import logo from 'Assets/images/logo.png';
import styles from 'Assets/jss/components/loginStyle.js';
import { registerUser, logoutUser } from 'Actions/userActions';


const useStyles = makeStyles(styles);

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const { user } = useSelector(state => state.userReducer ) || {};

    function responseFb(response) {
        dispatch(registerUser(response, 'facebook'));
    }

    function responseGoogle(response) {
        dispatch(registerUser(response, 'google-oauth2'));
    }

    const onSubmit = data => {
        console.log('SUBMIT DATA', data);
    }
    
    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={12} className={classes.logoContainer}>
                                    <Link to="/">
                                        <img src={logo} className={classes.logo} />
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        inputRef={register({ required: true, pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i })}
                                        label="Email"
                                        name="email"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        inputRef={register({ required: true })}
                                        label="Password"
                                        name="password"
                                        size="small"
                                        type="password"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.submitButton}>
                                    <Button color="secondary" fullWidth type="submit" variant="contained">Log In</Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={4} justify="center" className={classes.loginDivider}>
                                <Grid item xs={12} justify="center">
                                    <hr />
                                    <span>OR</span>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} justify="center">
                                <Grid item xs={12} className={classes.socialLogin}>
                                    <ReactFacebookLogin
                                        appId={process.env.FB_APP_ID}
                                        fields="name,email"
                                        callback={responseFb}
                                        cssClass={classes.facebookLogin}
                                        icon={<TiSocialFacebook className={classes.socialIcon}/>}
                                        textButton = "&nbsp;&nbsp;Sign In with Facebook"  
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <ReactGoogleLogin
                                    clientId={process.env.GOOGLE_CLIENT_ID}
                                    buttonText="Login"
                                    className={classes.googleLogin}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                    buttonText="Sign In with Google"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
}

export default Login;
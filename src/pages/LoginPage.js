import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LoginComponent from 'Components/Login/Login.js';
import styles from 'Assets/jss/pages/loginPage.js';


const useStyles = makeStyles(styles);

const LoginPage = () => {
    const classes = useStyles();

    return (
        <LoginComponent />
    );
}

export default LoginPage;
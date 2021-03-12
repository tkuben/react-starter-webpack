import React from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import MyAccountDropdown from 'Components/Navbars/MyAccountDropdown.js';
import styles from 'Assets/jss/components/homepageNavbarStyle.js';
import logo from 'Assets/images/logo.png';
import useAuth from 'Hooks/useAuth.js';


const useStyles = makeStyles(styles);

const HomePageNavbar = () => {
    const classes = useStyles();
    const user = useAuth('', false) || {};

    console.log('USER', user);

    return (
        <Container maxWidth="lg">
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Link to="/">
                        <img src={logo} className={classes.logo} />
                    </Link>
                    <div className={classes.grow} />
                    {user && user.first_name ?
                        <MyAccountDropdown /> : 
                        <Link to="/login" className={classes.navbarLinks}>
                            <MenuItem>
                                Login
                            </MenuItem>                        
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default HomePageNavbar;
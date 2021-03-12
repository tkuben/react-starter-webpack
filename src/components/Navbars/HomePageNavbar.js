import React from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import styles from 'Assets/jss/components/homepageNavbarStyle.js';
import logo from 'Assets/images/logo.png';

const useStyles = makeStyles(styles);

const DashboardNavBar = (props) => {
    const classes = useStyles();

    const { color } = props;

    return (
        <Container maxWidth="lg">
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Link to="/">
                        <img src={logo} className={classes.logo} />
                    </Link>
                    <div className={classes.grow} />
                    <AccountCircle />
                    <Link to="/login" className={classes.navbarLinks}>
                        <MenuItem style={{ paddingLeft: 13 }}>
                            My Account
                        </MenuItem>                        
                    </Link>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default DashboardNavBar;
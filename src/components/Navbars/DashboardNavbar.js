import React from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

import styles from 'Assets/jss/components/navbarStyle.js';
import MyAccountDropdown from 'Components/Navbars/MyAccountDropdown.js';
import logo from 'Assets/images/logo.png';

const useStyles = makeStyles(styles);

const DashboardNavBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Link to="/">
                        <img src={logo} className={classes.logo} />
                    </Link>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <MyAccountDropdown />                    
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsActiveOutlinedIcon />
                    </Badge>
                    </IconButton>

                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                    >
                    <MoreIcon />
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default DashboardNavBar;
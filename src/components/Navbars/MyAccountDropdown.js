import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { navbarLinks } from 'Assets/jss/global.js';
import { logoutUser } from 'Actions/userActions';


const useStyles = makeStyles(theme => ({
    menu: {
        '& .MuiPaper-root': {
            top: '65px !important',
            width: '251px' 
        }
    },
    nameButton: {
        '& h6': {
            marginLeft: '10px'
        }
    },
    navbarLinks
}));

export default function MyAccountDropdown() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();

  const { user } = useSelector(state => state.userReducer) || {}
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
        history.push('/');
    });
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}
            className={classes.nameButton}
        >
            <Avatar alt={user && user.first_name && user.first_name.charAt(0).toUpperCase()} />
            <Typography component="h6">
                {user.first_name}
            </Typography>            
        </IconButton>
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            className={classes.menu}
        >
            <Link to="/dashboard" className={classes.navbarLinks}>
                <MenuItem onClick={handleClose}>
                    Dashboard
                </MenuItem>                        
            </Link>
            <Link to="/dashboard/user" className={classes.navbarLinks}>
                <MenuItem onClick={handleClose}>
                    User Profile
                </MenuItem>                        
            </Link>
            <MenuItem onClick={handleLogout}  className={classes.navbarLinks}>
                Logout
            </MenuItem>                        
        </Menu>
    </div>
  );
}
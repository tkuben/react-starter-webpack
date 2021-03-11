import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'Assets/jss/pages/homepage.js';

const useStyles = makeStyles(styles);


const UserProfile = () => {
  const classes = useStyles();
  return (
  <div className={classes.container}>
    User Profile
  </div>);
}; 

export default UserProfile;

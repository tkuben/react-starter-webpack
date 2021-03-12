import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'Assets/jss/pages/homepage.js';

const useStyles = makeStyles(styles);


const HomePage = () => {
  const classes = useStyles();
  return (
  <div className={classes.container}>
    Home Page
    <br />
    <Link to="/dashboard">Go to dashboard</Link>
    <br />
    <Link to="/login">Login</Link>
  </div>);
}; 

export default HomePage;

import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// core components
import HomePageNavbar from 'Components/Navbars/HomePageNavbar.js';
import HeroSection from 'Components/HomePage/HeroSection.js';
import useAuth from 'Hooks/useAuth.js';
import styles from 'Assets/jss/pages/homepage.js';

const useStyles = makeStyles(styles);


const HomePage = () => {
  const classes = useStyles();
  const { user } = useAuth() || {};
  return (
    <div className={classes.container}>
      <HomePageNavbar />
      <Container maxWidth="lg">
        <HeroSection />
      </Container>
    </div>
  );
}; 

export default HomePage;

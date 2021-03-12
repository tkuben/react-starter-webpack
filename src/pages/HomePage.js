import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// core components
import HomePageNavbar from 'Components/Navbars/HomePageNavbar.js';
import HeroSection from 'Components/HomePage/HeroSection.js';
import styles from 'Assets/jss/pages/homepage.js';

const useStyles = makeStyles(styles);


const HomePage = () => {
  const classes = useStyles();
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

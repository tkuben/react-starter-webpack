import { navbarLinks } from 'Assets/jss/global.js';
import { fade } from '@material-ui/core/styles';

import {
    grayColor
  } from "Assets/jss/global.js";
  
  const headerStyle = (theme) => ({
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      logo: {
        height: '40px'
      },
      appBar: {
        backgroundColor: "transparent",
        zIndex: "1029",
        color: grayColor[7],
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      navbarLinks
  });
  
  export default headerStyle;
  
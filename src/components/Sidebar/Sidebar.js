import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dashboard from "@material-ui/icons/Dashboard";


import routes from 'SrcRoot/routes.js';
import styles from 'Assets/jss/components/sidebarStyle.js';

const useStyles = makeStyles(styles);

export default function TemporaryDrawer() {
  const classes = useStyles();

  const list = () => (
    <>
      <List>
        <NavLink to="/dashboard" activeClassName="active" key="dashboard"  className={classes.navbarLinks}>
            <ListItem button>
                <ListItemIcon><SvgIcon component={Dashboard} /></ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </NavLink>
        {routes.map((prop, key) => {
            return (
                <NavLink
                    to={prop.layout + prop.path}
                    activeClassName="active"
                    key={key}
                    className={classes.navbarLinks}
                >
                    <ListItem button key={prop.name}>
                        <ListItemIcon><SvgIcon component={prop.icon} /></ListItemIcon>
                        <ListItemText primary={prop.name} />
                    </ListItem>
                </NavLink>
            );
        })
        }
      </List>     
    </>
  );

  return (
    <>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
        paper: classes.drawerPaper,
        }}
        anchor="left"
        >
            {list()}
        </Drawer>
    </>
  );
}
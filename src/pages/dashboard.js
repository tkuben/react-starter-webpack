import React, { useEffect } from 'react';
import {
    Route,
    Switch,
  useRouteMatch
  } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
// core components
import DashboardNavBar from 'Components/Navbars/DashboardNavBar.js';
import Sidebar from 'Components/Sidebar/Sidebar.js';
import useAuth from 'Hooks/useAuth.js';

import styles from "Assets/jss/components/dashboardStyle.js";
import routes from 'SrcRoot/routes.js';

const switchRoutes = (
  <>
    {routes.map((prop, _) => {
      if (prop.layout === "/dashboard" && prop.path !== '/dashboard') {
        const path = prop.layout + prop.path;
        return (
          <Route
            path={prop.layout + prop.path}
            key={path}
          >
            <prop.component />
          </Route>
        );
      }
      return null;
    })}
  </>
);

const useStyles = makeStyles(styles);

const Dashboard = function() {
    const classes = useStyles();
    const user = useAuth() || {};
    let { path } = useRouteMatch();    
    return (
        <div className={classes.wrapper}>
            <DashboardNavBar />
            <Sidebar />
            <Switch>
              <Route exact path={path}>
                  <h3>Please select a topic.</h3>
              </Route>
              {switchRoutes}
            </Switch>
        </div>
    )
}



export default Dashboard;
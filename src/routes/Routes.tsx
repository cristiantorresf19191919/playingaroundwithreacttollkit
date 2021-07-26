import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../components/common/Header/Header';
import Loading from '../components/common/Loading/Loading';

import Home from '../pages/Home/Home';
import routes from './routes';

const Routes = () => {  
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>         
          <Route exact path={routes.home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routes;

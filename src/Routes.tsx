import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import { Login, SignUp, Protected, PrivateRoute } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';

/** Layout components **/
import Header from "./components/Header";
import Footer from "./components/Footer";

/** Pages **/
import About from "./views/pages/About";
import Home from "./views/pages/home";
import Insights from "./views/pages/Insights";
import Products from "./views/pages/Products";
import Request from "./views/pages/Request";
import Support from "./views/pages/Support";
import Dashboard from './views/pages/Dashboard';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
}));

export const Routes: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Switch>
      <Route path="/admin"><Admin /></Route>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/protected" component={Protected} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/logout"
        render={() => {
          logout();
          history.push('/');
          return null;
        }}
      />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/insights" component={Insights} />
      <Route path="/products" component={Products} />
      <Route path="/request" component={Request} />
      <Route path="/support" component={Support} />
      <Footer />
    </Switch>
  );
};

import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Page from '../page/page';
import {AppRoute, PageType} from '../../const';

const {ROOT, CART} = AppRoute;
const {MAIN, INNER} = PageType;

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={ROOT}>
          <Page type={MAIN} />
        </Route>
        <Route exact path={CART}>
          <Page type={INNER} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

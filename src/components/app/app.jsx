import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Page from '../page/page';
import {getData} from '../../store/slice';
import {AppRoute, PageType} from '../../const';

const {ROOT, CART} = AppRoute;
const {MAIN, INNER} = PageType;

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  });

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

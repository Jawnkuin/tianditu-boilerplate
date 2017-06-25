import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Frame from '../../shared/Frame';
import MainPage from '../../components/MainPage';
import MapExp from '../../components/MapComponent';

const IndexRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Frame} >
      <IndexRoute component={MainPage} />
    </Route>
    <Route path="/map" component={MapExp} />
  </Router>
);

export default IndexRouter;

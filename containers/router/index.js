import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Frame from '../../shared/Frame';
import MainPage from '../../components/MainPage';
import ThematicPage from '../../components/ThematicPage';
import ThemeMap from '../../components/ThematicPage/ThemeMap';
import MapExp from '../../components/MapComponent';


const IndexRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Frame} >
      <IndexRoute component={MainPage} />
      <Route path="/thememap" component={ThematicPage} />
      <Route path="/thememap/:tmid" component={ThemeMap} />
    </Route>
    <Route path="/map" component={MapExp} />
  </Router>
);

export default IndexRouter;

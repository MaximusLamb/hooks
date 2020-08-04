import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ListContainer from '../../container/ListContainer';
import DetailContainer from '../../container/DetailContainer';

export default function App() {
  return (
    <Router>
      <h1>Rick and Morty Characters</h1>
      <Switch>
        <Route exact path="/" component={ListContainer} />
        <Route path="/:id" component={DetailContainer} />
      </Switch>
    </Router>
  );
}

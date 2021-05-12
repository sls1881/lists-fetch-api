import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailContainer from '../../containers/DetailContainer';
import RickAndMorthy from '../../containers/RickAndMorthy';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={RickAndMorthy} />
          <Route path="/:id" component={DetailContainer} />
        </Switch>
      </Router>
    </div>
  );
}

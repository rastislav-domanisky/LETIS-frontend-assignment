import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import ListView from './views/ListView/ListView';
import DetailsView from './views/DetailsView/DetailsView';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:id" component={DetailsView} exact/>
          <Route path="/" component={ListView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

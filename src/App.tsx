import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import ListView from './views/ListView/ListView';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ListView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import '../stylesheets/App.scss';
import React from 'react';
import BrowsePanel from './BrowsePanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <BrowsePanel />
        <div className="page">
          <Switch>
            <Route path="/test1">
              <div>HIHI</div>
            </Route>
            <Route path="/test2">
              <div>YOYO</div>
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

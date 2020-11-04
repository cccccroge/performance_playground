import '../stylesheets/App.scss';
import React from 'react';
import BrowsePanel from './BrowsePanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ElementTree from './ElementTree';
import Test1 from './Test1';

function App() {
  return (
    <div className="App">
      <Router>
        <BrowsePanel />
        <div style={{ display: 'flex' }}>
          <div className="page">
            <Switch>
              <Route path="/test1">
                <Test1 />
              </Route>
              <Route path="/test2">
                <div>YOYO</div>
              </Route>
              <Route path="/">
                <div>Home</div>
              </Route>
            </Switch>
          </div>
          <ElementTree data={{}}/>
        </div>
      </Router>
    </div>
  );
}

export default App;

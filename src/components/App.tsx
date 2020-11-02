import '../stylesheets/App.scss';
import React from 'react';
import BrowsePanel from './BrowsePanel';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoundField from './RoundField';
import ElementTree from './ElementTree';

function App() {
  return (
    <div className="App">
      <Router>
        <BrowsePanel />
        <div style={{ display: 'flex' }}>
          <div className="page">
            <Switch>
              <Route path="/test1">
                <RoundField>
                  test1
                </RoundField>
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

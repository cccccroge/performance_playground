import '../stylesheets/BrowsePanel.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const BrowsePanel = () => {
  return (<div id="browse-panel">
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/test1">test1</Link>
  </div>);
};

export default BrowsePanel;

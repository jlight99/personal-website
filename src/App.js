import React, { Component } from 'react';
import Blog from './Blog';
import LandingPage from './LandingPage';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
    );
  }
}

export default App

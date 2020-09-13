import React, { Component } from 'react';
import Blog from './blog/Blog';
import LandingPage from './LandingPage';
import Counter from './sections/Counter';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/counter" component={Counter} />
    </div>
  </Router>
    );
  }
}

export default App

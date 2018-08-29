import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" component={Login} />
      </Router>
    );
  }
}
export default App;

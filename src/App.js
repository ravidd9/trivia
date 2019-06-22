import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Home />
      </div>
    );
  }
}

export default App;


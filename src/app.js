import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
// importing the Greeter component
import Input from './components/input.js'

class App extends Component {
  render() {
    return (
      <div>
        <Input />
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import SpotifyWebApi form 'spotify-web-api-js';
import logo from './logo.svg';
import './App.css';

const spotify = SpotifyWebApi();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            React JS
        </header>
      </div>
    );
  }
}

export default App;

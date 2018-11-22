import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import logo from './logo.svg';
import './App.css';

const spotify = SpotifyWebApi();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <a href= 'http://localhost:3000'>Log In</a>
        </header>
      </div>
    );
  }
}

export default App;

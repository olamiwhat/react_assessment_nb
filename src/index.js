import React, { Component } from 'react';
import { render } from 'react-dom';
import PlayerList from './PlayerList';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PlayerList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

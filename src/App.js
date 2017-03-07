import React, {Component} from 'react';
import logo from './logo.svg';

import './App.scss';

import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2 className="App-title"> ☢ custom-react-scripts ☢ </h2>
          <div className="App-subtitle"> allow custom config for create-react-app without ejecting</div>
        </div>

        <Button outline color="primary">asdasda</Button>
      </div>
    )
  }
}

export default App;

import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import logo from './logo.svg';
import './App.scss';
import {Provider} from 'react-redux'
import store from './store'
import Calculator from './components/Caculator'

export default () => (
  <div className="App">
    <Provider store={store}>
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo"/>
            Calculator
          </NavbarBrand>
        </Navbar>
        <Calculator/>
      </div>
    </Provider>
  </div>
);

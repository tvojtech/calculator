import React from 'react'
import logo from '../logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';

export default () => (
  <div>
    <Navbar color="faded" light toggleable>
      <NavbarBrand href="/">
        <img src={logo} alt="logo" className="App-logo"/>
        Calculator
      </NavbarBrand>
    </Navbar>
  </div>
)

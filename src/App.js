import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import store from './store'
import Calculator from './components/Calculator'
import Header from './components/Header'
import './App.scss'

export default () => (
  <div className="App">
    <ReduxProvider store={store}>
      <div>
        <Header/>
        <div className="container">
          <Calculator/>
        </div>
      </div>
    </ReduxProvider>
  </div>
);

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux'
import store from './store'
import Calculator from './components/Calculator'
import Header from './components/Header'
import './App.scss'
import './load-plugins'

export default () => (
  <div className="App">
    <ReduxProvider store={store}>
      <div>
        <Header/>
        <div className="main-content">
          <Calculator/>
        </div>
      </div>
    </ReduxProvider>
  </div>
);

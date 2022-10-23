import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserStore from './client/store/userStore';
import GameStore from './client/store/orgStore';
import {App} from './App'

export const Context = createContext(null);

console.log(process);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    game: new GameStore()
  }}>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);


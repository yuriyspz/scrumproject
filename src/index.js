import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from "redux";
import reducers from './reducers'
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import {About} from './components/About';
import {Full} from './components/Full';
import { BookContext } from './components/BookContext';

const myStyles = {
  light: {
      color: '#000',
      backgroundColor: '#fff'
  },
  dark: {
      color: '#fff',
      backgroundColor: '#000'
  }
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
      <BookContext.Provider value={myStyles}>
          <Route path="/" exact component={App}/>
          <Route path="/full/:id" component={Full} />
          <Route path="/about/" component={About}/>
        </BookContext.Provider>
      </BrowserRouter >
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

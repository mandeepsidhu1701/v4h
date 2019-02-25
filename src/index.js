import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import intl from 'react-intl-universal'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

import './index.css';
import AppContainer from './AppContainer'

const middleware = routerMiddleware(hashHistory)

const store = createStore(
  rootReducer,
  applyMiddleware(
    middleware,
    thunkMiddleware
  )
)

window.intl = intl
window.reduxStore = store
const history = syncHistoryWithStore(hashHistory, store)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} >
      </Route>
    </Router>
  </Provider>
)
  
render(<Root store={store} />, document.getElementById('root'));
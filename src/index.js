import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import intl from 'react-intl-universal';
import rootReducer from './reducers';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import './index.css';
import AppContainer from './AppContainer';
import HomeContainer from './pages/home/HomeContainer';

Amplify.configure(config)

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

window.intl = intl
window.reduxStore = store

const PrimaryLayout = () => (
  <div className="primary-layout">
    <main>
      <Route path="/" exact component={AppContainer} />
      <Route path="/home" component={HomeContainer} />
    </main>
  </div>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <PrimaryLayout />
    </Router>
  </Provider>
)

render(<Root store={store} />, document.getElementById('root'));
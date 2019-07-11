import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import intl from 'react-intl-universal';
import rootReducer from './reducers';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import './index.css';
import AppContainer from './AppContainer';
import HomeContainer from './pages/home/HomeContainer';

/* #DEVELOPMENT remove these components when auth forms are completed */
import AuthSignUpContainer from './components/auth/authPageSignUp';
import AuthSignInContainer from './components/auth/authPageSignIn';
import AuthVerifyContainer from './components/auth/authPageVerifySignUp';
/* #DEVELOPMENT */

Amplify.configure(config)

const history = createBrowserHistory()

const store = createStore(
  rootReducer(history),
  {},
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
    )
  )
)

window.intl = intl
window.reduxStore = store


const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="primary-layout">
        <main>
          <Route path="/" exact component={AppContainer} />
          <Route path="/home" component={HomeContainer} />
          {/* #DEVELOPMENT remove these two routes when auth forms are completed */}
          <Route path="/auth/sign-in" component={AuthSignInContainer} />
          <Route path="/auth/verify" component={AuthVerifyContainer} />
          <Route path="/auth/sign-up" component={AuthSignUpContainer} />
          {/* #DEVELOPMENT */}
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
)

render(<Routes />, document.getElementById('root'));
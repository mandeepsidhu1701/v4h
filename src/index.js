import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {Route, Switch} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import intl from 'react-intl-universal';
import {createBrowserHistory} from 'history';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import rootReducer from './reducers';
import Layout from './components/Layout';
import routes from './data/routes';
import './index.css';

Amplify.configure(config);

const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  {},
  compose(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);

window.intl = intl;
window.reduxStore = store;

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route exact key={index} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

render(<Routes />, document.getElementById('root'));

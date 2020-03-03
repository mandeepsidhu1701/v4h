import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import intl from 'react-intl-universal';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import Layout from './components/layout/Layout';
import routes from './routes';
import store from './store';
import './index.css';

Amplify.configure(config);

window.intl = intl;
window.reduxStore = store;

const history = createBrowserHistory();

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

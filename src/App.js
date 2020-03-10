import React, {Component} from 'react';
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
import {loadLocales} from './locales';

Amplify.configure(config);

window.intl = intl;
window.reduxStore = store;

const history = createBrowserHistory();

loadLocales(); // Load locales.  Default language: en-US
// loadLocales('de-DE');

export class App extends Component {
  render() {
    return (
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
  }
}

export default App;

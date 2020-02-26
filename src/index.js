import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {createStore, compose, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import intl from 'react-intl-universal';
import rootReducer from './reducers';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import HomeContainer from './pages/home/HomeContainer';
import {ArticlesContainer} from './pages/articles';
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
      <div className="primary-layout">
        <main>
          <Route path={routes.Home} exact component={HomeContainer} />
          <Route path={routes.Articles} exact component={ArticlesContainer} />
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

render(<Routes />, document.getElementById('root'));
import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import reducer from './reducers/index';

const history = createBrowserHistory();
const store = createStore(reducer(history), {}, compose(applyMiddleware(thunkMiddleware, routerMiddleware(history))));

export default store;

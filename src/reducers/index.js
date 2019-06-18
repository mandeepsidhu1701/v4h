import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import auth from './auth'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  auth
})

export default rootReducer;
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import auth from './auth'

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth
})

export default rootReducer;
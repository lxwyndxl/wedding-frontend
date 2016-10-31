import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import Reducers from '../reducers';

const loggerMiddleware = createLogger();
const routerReduxMiddleware = routerMiddleware(browserHistory);

export default function configureStore(preloadedState) {
  return createStore(
    Reducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerReduxMiddleware
    )
  )
}

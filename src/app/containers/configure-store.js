import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Reducers from '../reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    Reducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

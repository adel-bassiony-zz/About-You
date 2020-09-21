import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import register_reducer from './reducers/register_reducer';

// Redux: Combine Multiple Reducers together.
const rootReducer = combineReducers({
  register_reducer
});
  

// Redux: Middleware for logging all things related to the Redux.
const logger = store => {
    return next => {
      return action => {
        console.log('[Middleware] Dispatching', action);
        const result = next(action);
        console.log('[Middleware] next state', store.getState());
        return result;
      }
    }
}
  
// Redux: Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux: Setup the Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

export default store;
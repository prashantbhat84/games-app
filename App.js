import React from 'react';

import GamesNavigator from './navigation/Navigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './store/reducer/auth';

const rootReducer = combineReducers({ Auth: AuthReducer });

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <GamesNavigator />
    </Provider>
  );
}

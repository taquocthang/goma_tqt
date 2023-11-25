import {  configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist';

const middleware = [];
if(__DEV__){
    middleware.push(logger);
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(...middleware),
  devTools: (__DEV__)
});

export const persistor = persistStore(store);


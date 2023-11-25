import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';

import {reducer as formReducer} from 'redux-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './Auth/AuthSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'home'],
};

const appReducer = combineReducers({
    auth: authReducer,
});

const rootReducer = persistReducer(persistConfig, appReducer);

export default rootReducer;

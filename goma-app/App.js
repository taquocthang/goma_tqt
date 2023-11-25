/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View, ActivityIndicator, StyleSheet, StatusBar, Platform, Linking } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NativeBaseProvider } from 'native-base';
import { persistor, store } from './src/redux/store';
import AppContainer from './src/AppContainer';
import './src/translations/IMLocalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={<View style={styles.container}><ActivityIndicator color={'#000'} /></View>} persistor={persistor}>
        <NativeBaseProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StatusBar barStyle="light-content" />
            <AppContainer />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
});
export default App;

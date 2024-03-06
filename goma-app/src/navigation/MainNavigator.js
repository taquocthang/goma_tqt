import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeContainer from '../modules/Home';
import HomeStack from './components/HomeStack';
import HomeThangStack from './components/HomeThangStack';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ 'headerShown': false }} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomeThangStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

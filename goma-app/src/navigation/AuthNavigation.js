
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import Login from "../modules/Auth/Login";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => (
    <NavigationContainer>
        <FlashMessage icon={'auto'} />  
        <Stack.Navigator initialRouteName="GeneralLogin" >
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
)

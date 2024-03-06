/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ForgotPass, LoginScreen, Verication } from '../screens';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
  return <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
    <Stack.Screen name='LoginScreen' component={LoginScreen} />
    <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    <Stack.Screen name='ForgotPass' component={ForgotPass} />
    <Stack.Screen name='Verication' component={Verication} />
  </Stack.Navigator>
  
}

export default AuthNavigator;
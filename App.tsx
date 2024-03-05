/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';

const App = () => {

  const [isShowSpalsh, setIsShowSpalsh] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSpalsh(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    isShowSpalsh ? (
    <SplashScreen />
    ) : (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    )
  )
}
export default App;

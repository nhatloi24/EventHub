/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';
import { StatusBar } from 'react-native';

const App = () => {
  

  const [isShowSpalsh, setIsShowSpalsh] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSpalsh(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
    {
      isShowSpalsh ? (
        <SplashScreen />
        ) : (
          <NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>
        )
    }
    </>
  )
}
export default App;

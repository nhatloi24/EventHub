/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSpalsh, setIsShowSpalsh] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSpalsh(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, []);

  useEffect(() => {
    checkLogin();
  }, [])

  const checkLogin = async () => {
    const token = await getItem()
    token && setAccessToken(token)
  }

  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
    {
      isShowSpalsh ? (
        <SplashScreen />
        ) : (
          <NavigationContainer>
            {
              accessToken ? <MainNavigator/> : <AuthNavigator />
            }
          </NavigationContainer>
        )
    }
    </>
  )
}
export default App;

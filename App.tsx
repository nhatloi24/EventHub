/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppRouter from './src/navigators/AppRouter';
import store from './src/redux/store';
import { SplashScreen } from './src/screens';

const App = () => {
  const [isShowSpalsh, setIsShowSpalsh] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSpalsh(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, []);

  return (
    <>
      <StatusBar 
        barStyle={'dark-content'} 
        backgroundColor={'transparent'} 
        translucent 
      />
      <Provider store={store}>
        {isShowSpalsh ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        )}
      </Provider>
    </>
  );
}
export default App;
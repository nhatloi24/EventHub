/* eslint-disable prettier/prettier */
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, authSelector } from '../redux/reducer/authReducer'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import { SplashScreen } from '../screens'

const AppRouter = () => {
    const [isShowSpalsh, setIsShowSpalsh] = useState(true);

    const { getItem } = useAsyncStorage('auth');
    const auth = useSelector(authSelector);
    const dispatch = useDispatch();

  useEffect(() => {
    checkLogin();
    const timeout = setTimeout(() => {
      setIsShowSpalsh(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, []);

    const checkLogin = async () => {
        const res = await getItem();

        res && dispatch(
            addAuth(JSON.parse(res)));
    };
    return <>{isShowSpalsh ? <SplashScreen /> : auth.accesstoken ? <MainNavigator /> : <AuthNavigator />}</>;
}

export default AppRouter;
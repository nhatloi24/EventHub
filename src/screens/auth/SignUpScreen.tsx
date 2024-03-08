/* eslint-disable prettier/prettier */
import { Lock1, Sms, User } from 'iconsax-react-native'
import React, { useEffect, useState } from 'react'
import authenticationAPI from '../../apis/authApi'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponet, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { Colors } from '../../const/Colors'
import { fontFamily } from '../../const/fontFamily'
import { LoadingModal } from '../../modals'
import SocialLogin from './components/SocialLogin'
import { Validate } from '../../utils/validate'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducer/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword : ''
}

const SignUpScreen = ({navigation}: any) => {

  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const  dispatch = useDispatch();

  useEffect(() => {
    if (values.email || values.password) {
      setErrorMessage('');
    }
  }, [values.email, values.password])

  const handleChangeValues = (key: string, value: string) => {
    const data: any = {...values}
    data[`${key}`] = value; 
    setValues(data);
  }

  const handleRegister = async () => {
    const { email, password, confirmPassword } = values;
    const emailValidation = Validate.email(email)
    if (email && password && confirmPassword) {
      if (emailValidation) {
        setErrorMessage('');
        setIsLoading(true);

        try {
          const res = await authenticationAPI.HandleAuthentication(
            '/register',
           {
            fullname: values.username,
            email,
            password,
           },
            'post'
          );
          dispatch(addAuth(res.data));
          await AsyncStorage.setItem('auth', JSON.stringify(res.data))
          setIsLoading(false);

        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else {
        setErrorMessage('Email not correct');
      }
    } else {
      setErrorMessage('Please enter complete information!');
    }
  }

  return (
    <>
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent size={24} text='Sign Up' font={fontFamily.medium} title />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          placeholder='Full name'
          onChange={val => handleChangeValues('username' ,val)}
          allowClear
          affix={<User size={22} color={Colors.gray} />}
        />
        <InputComponent
          value={values.email}
          placeholder='abc@gmail.com'
          onChange={val => handleChangeValues('email' ,val)}
          allowClear
          affix={<Sms size={22} color={Colors.gray} />}
        />
        <InputComponent
          value={values.password}
          placeholder='Password'
          onChange={val => handleChangeValues('password' ,val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
        />
        <InputComponent
          value={values.confirmPassword}
          placeholder='Confirm Password'
          onChange={val => handleChangeValues('confirmPassword' ,val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
        />
      </SectionComponent>
      {
        errorMessage && (
          <SectionComponent>
            <TextComponent text={errorMessage} color={Colors.danger} />
          </SectionComponent>
        )}
      <SpaceComponent height={16} />
        <SectionComponent styles={{alignItems: 'center'}}>
          <ButtonComponent onPress={handleRegister} text='SIGN UP' type='primary' />
        </SectionComponent>
        <SocialLogin/>
        <SectionComponent>
          <RowComponet justify='center' >
            <TextComponent text="Already have an account?" />
            <ButtonComponent type="link" text='Sign in' onPress={() => navigation.navigate('LoginScreen')} />
          </RowComponet>
        </SectionComponent>
    </ContainerComponent>
        <LoadingModal visible={isLoading}  />
    </>
  )
}

export default SignUpScreen
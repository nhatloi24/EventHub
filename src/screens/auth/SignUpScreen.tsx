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

interface ErrorMessages {
  email?: string,
  password: string,
  confirmPassword: string
}

const initValue = {
    username: '',
    email: '',
    password: '',
    confirmPassword : ''
};



const SignUpScreen = ({navigation}: any) => {

  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisabled, setIsDisabled] = useState(true);

  const  dispatch = useDispatch();

  useEffect(() => {
    if (!errorMessage || errorMessage && (errorMessage.email || errorMessage.password || errorMessage.confirmPassword)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

  }, [errorMessage])

  const handleChangeValues = (key: string, value: string) => {
    const data: any = {...values}
    data[`${key}`] = value; 
    setValues(data);
  };

  const formValidator = (key : string) => {
    const data = {...errorMessage}
    let message = ``
          switch (key) {
        case 'email' :
          if (!values.email) {
            message = `Email is required!!`
          } else if (!Validate.email(values.email)) {
            message = 'Email is invalid'
          } else {
            message = '';
          }
        break;

        case 'password' : 
        message = !values.password ? `Password is required!!` : '';
        break;

        case 'confirmPassword' :
          if(!values.confirmPassword) {
            message = `Please type confirm password`
          } else if (values.confirmPassword !== values.password) {
            message = 'Password is not match!!';
          } else {
            message = '';
          }
        break;
      }
      data[`${key}`] = message;
      setErrorMessage(data);
  };

  const handleRegister = async () => {
    const api = `/verification`
    try {
      const res = await authenticationAPI.HandleAuthentication(
        api, 
        {email: values.email},
        'post'
        );
        console.log(res);
        
    } catch (error) {
      console.log(error);
      
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
          onEnd={() => formValidator('email')}
        />
        <InputComponent
          value={values.password}
          placeholder='Password'
          onChange={val => handleChangeValues('password' ,val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
          onEnd={() => formValidator('password')}
        />
        <InputComponent
          value={values.confirmPassword}
          placeholder='Confirm Password'
          onChange={val => handleChangeValues('confirmPassword' ,val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
          onEnd={() => formValidator('confirmPassword')}
        />
      </SectionComponent>
      { errorMessage &&
         (
          <SectionComponent>
            {
              Object.keys(errorMessage).map((error, index) => errorMessage[`${error}`] && (
                  <TextComponent
                    text={errorMessage[`${error}`]}
                    key={`error${index}`} 
                    color={Colors.danger} /> 
              )) 
            }
          </SectionComponent>
        )}
      <SpaceComponent height={16} />
        <SectionComponent styles={{alignItems: 'center'}}>
          <ButtonComponent 
            onPress={handleRegister} 
            text='SIGN UP' 
            type='primary'
            disable = {isDisabled}
             />
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
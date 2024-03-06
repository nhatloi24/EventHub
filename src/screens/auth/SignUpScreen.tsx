/* eslint-disable prettier/prettier */
import { Lock1, Sms, User } from 'iconsax-react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponet, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { Colors } from '../../const/Colors'
import { Image, Switch } from 'react-native'
import { fontFamily } from '../../const/fontFamily'
import SocialLogin from './components/SocialLogin'

const initValue = {
    username: '',
    email: '',
    passwpord: '',
    confirmPass : ''
}

const SignUpScreen = ({navigation}: any) => {

  const [values, setValues] = useState(initValue);
  const handleChangeValues = (key: string, value: string) => {
    const data: any = {...values}
    data[`${key}`] = value; 
    setValues(data);
  }

  return (
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
          value={values.passwpord}
          placeholder='Password'
          onChange={val => handleChangeValues('password' ,val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
        />
        <InputComponent
          value={values.confirmPass}
          placeholder='Confirm Password'
          onChange={val => handleChangeValues('confirmPassword' ,val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
        />
        {/* <InputComponent
          value={password}
          placeholder='Enter your password...'
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
        /> */}
      </SectionComponent>
      <SpaceComponent height={16} />
        <SectionComponent styles={{alignItems: 'center'}}>
          <ButtonComponent text='SIGN UP' type='primary' />
        </SectionComponent>
        <SocialLogin/>
        <SectionComponent>
          <RowComponet justify='center' >
            <TextComponent text="Already have an account?" />
            <ButtonComponent type="link" text='Sign in' onPress={() => navigation.navigate('LoginScreen')} />
          </RowComponet>
        </SectionComponent>
    </ContainerComponent>
  )
}

export default SignUpScreen
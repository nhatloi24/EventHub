/* eslint-disable prettier/prettier */
import { Lock1, Sms } from 'iconsax-react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponet, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { Colors } from '../../const/Colors'
import { Image, Switch } from 'react-native'
import { fontFamily } from '../../const/fontFamily'
import SocialLogin from './components/SocialLogin'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [isRemember, setIsRemember] = useState(true)

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{ width: 162, height: 114, marginBottom: 30 }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} text='Sign In' font={fontFamily.medium} title />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder='Enter your email...'
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={Colors.gray} />}
        />
        <InputComponent
          value={password}
          placeholder='Enter your password...'
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock1 size={22} color={Colors.gray} />}
        />
        <RowComponet justify='space-between' >
          <RowComponet onPress={() => setIsRemember(!isRemember) } >
            <Switch 
              trackColor={{true: Colors.primary}}
              thumbColor={Colors.white}
              value={isRemember} 
              onChange={() => setIsRemember(!isRemember)} />
            <TextComponent text='Remember me' />
          </RowComponet>
          <ButtonComponent 
            text='Forgot Password'
            onPress={() => {}}
            type='text'
            />
        </RowComponet>
      </SectionComponent>
      <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent text='SIGN IN' type='primary' />
        </SectionComponent>
        <SocialLogin/>
        <SectionComponent>
          <RowComponet justify='center' >
            <TextComponent text="Don't have an account?" />
            <ButtonComponent type="link" text='Sign up'/>
          </RowComponet>
        </SectionComponent>
    </ContainerComponent>
  )
}

export default LoginScreen
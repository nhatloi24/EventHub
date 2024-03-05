/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View } from 'react-native'
import { InputComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyle'
import { Colors } from '../../const/Colors'
import { Lock1, Sms } from 'iconsax-react-native'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <View style={[globalStyles.container, {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }]}>
      <InputComponent 
        value={email} 
        placeholder='Enter your email...' 
        onChange={val => setEmail(val)}
        // isPassword
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
    </View>
  )
}

export default LoginScreen
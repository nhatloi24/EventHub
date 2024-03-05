/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native'
import { ButtonComponent } from '../../components'

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      {/* <Button title='Login' 
      onPress={async () => await AsyncStorage.setItem('assetToken', '123123')} /> */}
      <ButtonComponent text='LOGIN' onPress={() => console.log('Login')} icon />
    </View>
  )
}

export default LoginScreen
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { ArrowLeft, ArrowRight, Sms } from 'iconsax-react-native'
import { Colors } from '../../const/Colors'

const ForgotPass = () => {
    const [email, setEmail] = useState('')
  return (
    <ContainerComponent back isImageBackground >
        <SectionComponent>
            <TextComponent text='Reset Password' title />
            <TextComponent text='Please enter your email address to request a password reset'/>
            <SpaceComponent height={26} />
            <InputComponent 
            value={email} 
            onChange={val => setEmail(val)}
            affix={<Sms size={20} color={Colors.gray} />}
            placeholder='abc@gmail.com'
            />
        </SectionComponent>
        <SectionComponent styles={{alignItems: 'center'}}>
            <ButtonComponent 
            text='Send' 
            type='primary' 
            icon= { <ArrowRight size={20} color={Colors.white} />}
            iconFlex='right'
             />
        </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPass
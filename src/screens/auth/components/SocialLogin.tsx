/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components'
import { Colors } from '../../../const/Colors'
import { fontFamily } from '../../../const/fontFamily'
import { Google } from 'iconsax-react-native'

const SocialLogin = () => {
  return (
    <SectionComponent>
        <TextComponent 
        styles={{textAlign: 'center'}}
        text='OR' 
        color={Colors.gray4} 
        size={16} 
        font={fontFamily.medium}
         />
         <ButtonComponent 
         type='primary'
         color={Colors.white}
         textColor={Colors.text}
         text='Login with Google'
         icon={<Google size={24} color={Colors.primary}  />}
         iconFlex='left'
         />
    </SectionComponent>
  )
}

export default SocialLogin
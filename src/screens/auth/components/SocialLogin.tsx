/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { Colors } from '../../../const/Colors'
import { fontFamily } from '../../../const/fontFamily'
import { Facebook, Google } from '../../../assets/svg'

const SocialLogin = () => {
    return (
        <SectionComponent styles={{alignItems: 'center'}}>
            <TextComponent
                styles={{ textAlign: 'center' }}
                text='OR'
                color={Colors.gray4}
                size={16}
                font={fontFamily.medium}
            />
            <SpaceComponent height={16} />
            <ButtonComponent
                type='primary'
                color={Colors.white}
                textColor={Colors.text}
                text='Login with Google'
                icon={<Google />}
                iconFlex='left'
                textFont={fontFamily.regular}
            />
            <ButtonComponent
                type='primary'
                color={Colors.white}
                textColor={Colors.text}
                text='Login with Facebook'
                icon={<Facebook />}
                iconFlex='left'
                textFont={fontFamily.regular}
            />
        </SectionComponent>
    )
}

export default SocialLogin
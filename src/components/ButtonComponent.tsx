/* eslint-disable prettier/prettier */
import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
    iconFlex?: 'right' | 'left'
}

const ButtonComponent = (props: Props) => {
    const {icon, text, type, color, styles, textColor, textStyle, onPress, iconFlex} = props
  return (
    <TouchableOpacity>
        {icon && iconFlex ==='left' && icon}
        <TextComponent text={text} color={textColor} styles={textStyle} />
        {icon && iconFlex ==='right' && icon}
    </TouchableOpacity>
  )
}

export default ButtonComponent
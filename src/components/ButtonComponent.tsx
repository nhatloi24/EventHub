/* eslint-disable prettier/prettier */
import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyle';
import { Colors } from '../const/Colors';
import { fontFamily } from '../const/fontFamily';

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
    type === 'primary' ?

    <TouchableOpacity 
        onPress={onPress}
        style={[globalStyles.button, 
        {
        backgroundColor: color ?? Colors.primary
        }, styles]}>
        {icon && icon}
        <TextComponent 
            text={text} 
            color={textColor ?? Colors.white}
            styles={[textStyle, {
                marginLeft: icon ? 12 : 0
            }]}
            flex={icon && iconFlex === 'right' ? 1 : 0}
             />
        {icon && iconFlex ==='right' && icon}
    </TouchableOpacity>
    : <TouchableOpacity>
        <TextComponent text={text} color={type === 'link' ? Colors.primary : Colors.text} />
    </TouchableOpacity>
  )
}

export default ButtonComponent
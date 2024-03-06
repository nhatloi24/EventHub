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
    textFont?: string;
    onPress?: () => void;
    iconFlex?: 'right' | 'left'
}

const ButtonComponent = (props: Props) => {
    const {icon, text, type, color, styles, textColor, textStyle, onPress, iconFlex, textFont} = props
  return (
    type === 'primary' ?

    <TouchableOpacity 
        onPress={onPress}
        style={[globalStyles.button, 
            globalStyles.shadow,
        {
        backgroundColor: color ?? Colors.primary,
        marginBottom: 17,
        width: '80%'
        }, styles]}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent 
            text={text} 
            color={textColor ?? Colors.white}
            styles={[textStyle, {
                marginLeft: icon ? 12 : 0,
                fontSize: 16,
                textAlign: 'center'
            }]}
            flex={icon && iconFlex === 'right' ? 1 : 0}
            font={textFont ?? fontFamily.medium}
             />
        {icon && iconFlex ==='right' && icon}
    </TouchableOpacity>
    : <TouchableOpacity onPress={onPress} >
        <TextComponent text={text} color={type === 'link' ? Colors.primary : Colors.text} />
    </TouchableOpacity>
  )
}

export default ButtonComponent
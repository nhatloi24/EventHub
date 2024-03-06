/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { Colors } from '../const/Colors'
import { fontFamily } from '../const/fontFamily'
import { globalStyles } from '../styles/globalStyle'

interface Props {
    text: string,
    color?: string,
    size?: number,
    flex?: number,
    font?: string,
    styles?: StyleProp<TextStyle>
    title?: boolean
}
const TextComponent = (props: Props) => {

    const {text, size, font, color, flex, styles, title} = props

  return <Text style={[
    globalStyles.text,
    {
        color: color ?? Colors.text,
        flex: flex ?? 0,
        fontSize: size ? size : title ? 24 : 14,
        fontFamily: font ? font : fontFamily.regular
    },
    styles,
  ]}>{text}</Text>
}

export default TextComponent
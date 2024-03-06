/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

interface Props {
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined
  styles?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void
}

const RowComponet = (props: Props) => {
  const { justify, styles, children, onPress } = props;

  const localStyle = [globalStyles.row, {
    justifyContent: justify,
  }, styles]
  return onPress ? (
    <TouchableOpacity onPress={onPress} style={localStyle}>{children}</TouchableOpacity>
  ) : (
    <View style={localStyle}>
      {children}
    </View>
  )
}

export default RowComponet
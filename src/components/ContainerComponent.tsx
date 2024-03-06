/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { ImageBackground, ScrollView, View } from 'react-native';
import { globalStyles } from '../styles/globalStyle';


interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children?: ReactNode;
}
const ContainerComponent = (props: Props) => {
    const { children, title, isImageBackground, isScroll } = props;

    const returnContainer = isScroll ? (
        <ScrollView style={{flex: 1}}>{children}</ScrollView>
    ) : (
        <View style={{flex: 1}}>
            {children}
        </View>)
    return isImageBackground ? (
        <ImageBackground
            source={require('../assets/images/splash-img.png')}
            style={{ flex: 1 }}
            imageStyle={{ flex: 1 }}>
            <SafeAreaView style={{flex: 1}}>{returnContainer}</SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={[globalStyles.container]}>
            <View>{returnContainer}</View>
        </SafeAreaView>
    )
};

export default ContainerComponent
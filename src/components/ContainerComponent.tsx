/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { ImageBackground, ScrollView, View } from 'react-native';
import { globalStyles } from '../styles/globalStyle';
import { useNavigation } from '@react-navigation/native';
import RowComponet from './RowComponet';
import { ArrowLeft } from 'iconsax-react-native';
import { Colors } from '../const/Colors';
import TextComponent from './TextComponent';
import { fontFamily } from '../const/fontFamily';


interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children?: ReactNode;
    back?: boolean
}
const ContainerComponent = (props: Props) => {
    const { children, title, isImageBackground, isScroll, back } = props;
    const naigation: any = useNavigation();
    const headerComponent = () => {
        return (
        <View style={{ flex: 1, paddingTop: 30 }}>
            {
                (title || back) &&
            (
            <RowComponet 
            styles={{
                paddingHorizontal: 16, 
                paddingVertical: 10, 
                minWidth: 48,
                minHeight: 48
                }}>
                {back && (
                <TouchableOpacity  onPress={() => naigation.goBack()}>
                    <ArrowLeft size={24} color={Colors.text} />
                </TouchableOpacity>
                )}
                { title ? (
                    <TextComponent text={title} size={16} flex={1} font={fontFamily.medium} />
                ) : (
                <></>
                )}
            </RowComponet>
            )}
            {returnContainer}
        </View>
        )
    }

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
            <SafeAreaView style={{flex: 1}}>{headerComponent()}</SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={[globalStyles.container]}>
            <View>{headerComponent()}</View>
        </SafeAreaView>
    )
};

export default ContainerComponent
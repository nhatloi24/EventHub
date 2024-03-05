/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../const/appInfos'
import { globalStyles } from '../../styles/globalStyle'
import { Colors } from '../../const/Colors'
import { TextComponent } from '../../components'
import { fontFamily } from '../../const/fontFamily'

const OnboardingScreen = ({navigation}: any) => {
    const [index, setIndex] = useState(0)
  return (
    <View style={[globalStyles.container]}>
      <Swiper style={{}} 
            loop={false}
            onIndexChanged={num => setIndex(num)}
            index={index}
            activeDotColor={Colors.white}
            >
        <Image 
            source={require('../../assets/images/onboarding-1.png')}
            style={{
                flex: 1, 
                width: appInfo.sizes.WIDTH, 
                height: appInfo.sizes.HEIGHT,
                resizeMode: 'cover'
            }}
            />
            <Image 
            source={require('../../assets/images/onboarding-2.png')}
            style={{
                flex: 1, 
                width: appInfo.sizes.WIDTH, 
                height: appInfo.sizes.HEIGHT,
                resizeMode: 'cover'
            }}
            />
            <Image 
            source={require('../../assets/images/onboarding-3.png')}
            style={{
                flex: 1, 
                width: appInfo.sizes.WIDTH, 
                height: appInfo.sizes.HEIGHT,
                resizeMode: 'cover'
            }}
            />
      </Swiper>
      <View style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
        <TextComponent 
            text='Skip' 
            color={Colors.gray2} 
            font={fontFamily.medium} />
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => 
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
            <TextComponent 
                text='Next' 
                color={Colors.white} 
                font={fontFamily.medium} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '500'
    }
})
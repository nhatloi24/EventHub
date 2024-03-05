/* eslint-disable prettier/prettier */
import React from 'react'
import { ActivityIndicator, Image, ImageBackground } from 'react-native'
import { SpaceComponent } from '../components'
import { Colors } from '../const/Colors'
import { appInfo } from '../const/appInfos'

const SplashScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/splash-img.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      imageStyle={{flex: 1}}
      >
        <Image 
          source={require('../assets/images/logo.png')}
          style={{
            width: appInfo.sizes.WIDTH * 0.8,
            resizeMode: 'contain'
          }}
          />
          <SpaceComponent height={16} />
          <ActivityIndicator color={Colors.gray} size={22} />
    </ImageBackground>
  )
}

export default SplashScreen
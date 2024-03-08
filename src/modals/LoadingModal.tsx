/* eslint-disable prettier/prettier */
import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { TextComponent } from '../components'
import { globalStyles } from '../styles/globalStyle'
import { Colors } from '../const/Colors'

interface Props {
    visible: boolean,
    mess?: string,
}

const LoadingModal = (props: Props) => {
    const { visible, mess } = props
    return (
        <Modal visible={visible} style={[{ flex: 1 }]} transparent statusBarTranslucent>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ActivityIndicator
                    color={Colors.white}
                    size={32} />
                <TextComponent
                    text='Loading'
                    flex={0}
                    color={Colors.white} />
            </View>
        </Modal>
    )
}

export default LoadingModal
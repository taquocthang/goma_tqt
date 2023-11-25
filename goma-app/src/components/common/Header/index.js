import { Box, Center } from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import config from '../../../config';

const HeaderCustom = ({
    disableIcon,
    navigation,
    title,
}) => {
    const insets = useSafeAreaInsets();
    return (
        <Box background={title ? config.colors.green : config.colors.white}>
            <View style={[styles.headTop, {height: insets.top}]} />
            <Center flexDirection='row' style={{ height: 48 }}>
                {
                    !disableIcon && 
                    <TouchableOpacity style={styles.btnGoBack} activeOpacity={0.8} onPress={()=> console.log(navigation.navigate('Home'))}>
                        {/* <Image source={title ? images.icon_back_white : images.icon_back} /> */}
                        <Ionicons name={'home'} size={20} color={title ? config.colors.white : config.colors.green}  />
                    </TouchableOpacity>
                }
                
                <View style={[styles.boxTitle, disableIcon ? { width: config.width, paddingRight: 0} : '']}>
                    <Text style={styles.txtTitle}>{title ?? ''}</Text>
                </View>
            </Center>
        </Box>
    )
}
export default HeaderCustom;


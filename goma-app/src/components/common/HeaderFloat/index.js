import { Box, Center } from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { globalStyles } from '../../../globalStyles';
import config from '../../../config';

const HeaderFloat = ({
    disableIcon,
    navigation,
    title,
}) => {
    const insets = useSafeAreaInsets();
    return (
        <Box style={styles.headerBox}>
            <Center flexDirection='row' style={[styles.headerWrap, globalStyles.container]}>
                {
                    !disableIcon && 
                    <TouchableOpacity style={styles.btnGoBack} activeOpacity={0.8} onPress={navigation.goBack}>
                        <Ionicons name={'arrow-back'} size={30} color={config.colors.white} />
                    </TouchableOpacity>
                }
                
                <View style={[styles.boxTitle, disableIcon ? { width: config.width, paddingRight: 0} : '']}>
                    <Text style={styles.txtTitle}>{title ? title.toUpperCase() : ''}</Text>
                </View>
            </Center>
        </Box>
    )
}
export default HeaderFloat;


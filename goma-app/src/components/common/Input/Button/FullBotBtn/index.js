import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../../../../config';
import styles from './style';

const FullBotBtn = ({
    label,
    icon,
    isgradient = true,
    style,
    ...restProps
}) => {
    return (
        <View style={styles.formSubmitRow}>
            <TouchableOpacity activeOpacity={0.7}>
                {
                    isgradient && 
                    <LinearGradient colors={['#FD8792', '#FDB7B2']} style={[styles.btnLinearGradient, style]}>
                    {
                        icon && 
                        <Ionicons name={icon} size={31} color={config.colors.white}  />
                    }
                    {
                        label &&
                        <Text style={styles.formSubmitTextBtn}>{label ?? ''}</Text>
                    }
                    </LinearGradient>
                }
                {
                    !isgradient && 
                    <View style={[styles.btnLinearGradient, style]}>
                    {
                        icon && 
                        <Ionicons name={icon} size={31} color={config.colors.white}  />
                    }
                    {
                        label &&
                        <Text style={styles.formSubmitTextBtn}>{label ?? ''}</Text>
                    }
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
        
};
export default FullBotBtn;
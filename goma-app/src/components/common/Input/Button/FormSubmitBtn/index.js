import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../../../../config';
import styles from './style';

const FormSubmitBtn = ({
    label,
    icon,
    ...restProps
}) => {
    return (
        <View style={styles.formSubmitRow}>
            <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient colors={['#FD8792', '#FDB7B2']} style={styles.btnLinearGradient}>
                {
                    icon && 
                    <Ionicons name={icon} size={31} color={config.colors.white}  />
                }
                {
                    label &&
                    <Text style={styles.formSubmitTextBtn}>{label ?? ''}</Text>
                }
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
        
};
export default FormSubmitBtn;
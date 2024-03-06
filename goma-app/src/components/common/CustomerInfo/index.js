import { View, Text, Image } from 'react-native';
import React from 'react';
import config from '../../../config';
import styles from './style';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import { useTranslation } from 'react-i18next';
import { log } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomerInfo = ({ }) => {
    const { t, i18n } = useTranslation();
    return (
        <View style={styles.customerInfo}>
            <Text style={styles.mainTitle}>{t('service:customerInformation')}</Text>
            <View style={styles.detailCustomerInfo}>
                <Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
                <View style={styles.itemDetailCustomerInfo}>
                    <Text style={styles.label}>{t('service:fullname')}:</Text>
                    <Text style={styles.value}>Nguyễn Thị Cầm Sa</Text>
                </View>
            </View>
            <View style={styles.detailCustomerInfo}>
                <Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
                <View style={styles.itemDetailCustomerInfo}>
                    <Text style={styles.label}>{t('service:dateOfBooking')}:</Text>
                    <Text style={styles.value}>05/10/2023</Text>
                </View>
            </View>
            <View style={styles.detailCustomerInfo}>
                <Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
                <View style={styles.itemDetailCustomerInfo}>
                    <Text style={styles.label}>{t('service:timeOfService')}:</Text>
                    <Text style={styles.value}>05/10/2023 10:20</Text>
                </View>
            </View>
            <View style={styles.detailCustomerInfo}>
                <Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
                <View style={styles.itemDetailCustomerInfo}>
                    <Text style={styles.label}>{t('service:address')}:</Text>
                    <Text style={styles.value}>06 Trần Hưng Đạo, TP Huế.</Text>
                </View>
            </View>
            <View style={[styles.detailCustomerInfo, styles.lastdetailCustomerInfo]}>
                <Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
                <View style={styles.itemDetailCustomerInfo}>
                    <Text style={styles.label}>{t('service:phonenumber')}:</Text>
                    <Text style={styles.value}>0999-087-223</Text>
                </View>
            </View>
        </View>
    );
};

export default CustomerInfo;

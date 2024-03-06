import { View, Text, Image } from 'react-native';
import React from 'react';
import config from '../../../config';
import styles from './style';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import { useTranslation } from 'react-i18next';
import { log } from 'react-native-reanimated';

const ServiceProductInfo = ({ check }) => {
    const { t, i18n } = useTranslation();
    return (
        <View style={styles.productInfo}>
            <Image source={config.images.productImageThumb} style={style.productImage} alt="product image" />
            <View style={styles.detailProductInfo}>
                <Text style={styles.titleBooking}>{t('service:serviceNameTitle')}</Text>
                <Text style={styles.priceBooking}>{t('service:servicePrice')}</Text>
                {
                    check ? '' :
                        <Text style={styles.statusBooking}>{t('service:assignmentTechnician')}</Text>
                }
            </View>
        </View>
    );
};

export default ServiceProductInfo;

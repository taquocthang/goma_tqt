import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';


const BookService = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:paymentMethod')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, globalStyles.container]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<TouchableOpacity activeOpacity={0.7}>
						<View style={styles.paymentItem}>
							<Image source={config.images.cashIcon} style={styles.paymentIcon} alt='Cash Icon'/>
							<Text style={styles.paymentName}>{t('service:paymentCOD')}</Text>
							<Ionicons name={'chevron-forward'} size={20} color={config.colors.black} style={styles.paymentArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7}>
						<View style={styles.paymentItem}>
							<Image source={config.images.qrcodeIcon} style={styles.paymentIcon} alt='QR Icon'/>
							<Text style={styles.paymentName}>{t('service:paymentCOD')}</Text>
							<Ionicons name={'chevron-forward'} size={20} color={config.colors.black} style={styles.paymentArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7}>
						<View style={styles.paymentItem}>
							<Image source={config.images.cardIcon} style={styles.paymentIcon} alt='Card Icon'/>
							<Text style={styles.paymentName}>{t('service:paymentCOD')}</Text>
							<Ionicons name={'chevron-forward'} size={20} color={config.colors.black} style={styles.paymentArrow} />
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</View>
  	)
}


export default BookService;
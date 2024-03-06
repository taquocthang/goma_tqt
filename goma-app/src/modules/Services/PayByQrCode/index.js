import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';


const PayByQrCode = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:paybyQrcode')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, globalStyles.container]}>
				{/* <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}> */}
					<View style={styles.screenContent}>
						<Text style={styles.screenTitle}>{t('service:payByQrcodeTitle')}</Text>
						<View style={styles.wrapQrcode}>
							<Image style={styles.qrcodeImage} source={config.images.qrcodeImage} alt='QR CODE'></Image>
						</View>
						<View style={styles.bankInfo}>
							<Text style={styles.bankLine}>{t('service:accountName')}: GWEN</Text>
							<Text style={styles.bankLine}>{t('service:accountNumber')}: 1234567890</Text>
							<Text style={styles.bankLine}>{t('service:bankName')} Vietcombank</Text>
						</View>
						<View style={styles.bankNote}>
							<Text style={styles.bankNoteTitle}>{t('service:note')}:</Text>
							<Text style={styles.bankNoteDesc}>
							- ghi chú 1{"\n"}
							- ghi chú 2
							</Text>
						</View>
					</View>
					<View style={styles.screenButton}>
						<FormSubmitBtn icon={'arrow-back-outline'}/>
					</View>
				{/* </ScrollView> */}
			</View>
		</View>
  	)
}


export default PayByQrCode;
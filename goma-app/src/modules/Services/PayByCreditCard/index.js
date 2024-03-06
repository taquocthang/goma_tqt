import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreditCardForm from './form';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';


const PayByCreditCard = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:PayByCreditCard')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, globalStyles.container]}>
				<CreditCardForm/>
			</View>
		</View>
  	)
}


export default reduxForm({
	form: 'PayByCreditCard', // a unique identifier for this form
	enableReinitialize: true,
})(PayByCreditCard);
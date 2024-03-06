import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { reduxForm } from 'redux-form';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import EditInfoForm from './form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';


const EditInformation = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:editInfomation')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, globalStyles.container]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<EditInfoForm/>
				</ScrollView>
			</View>
		</View>
  	)
}


export default reduxForm({
	form: 'EditInfoForm', // a unique identifier for this form
	enableReinitialize: true,
})(EditInformation);
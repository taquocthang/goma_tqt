import { View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import styles from './style';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import RegisterForm from './form';
import { reduxForm } from 'redux-form';
import HeaderFloat from '../../../components/common/HeaderFloat';
import { useTranslation } from 'react-i18next';


const Register = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<ImageBackground source={config.images.headerfloatbg} resizeMode="cover" style={globalStyles.floatSreenBg}></ImageBackground>
			<HeaderFloat title={t('form:register')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.container]}>
				<View style={globalStyles.floatScreenBorder}>
					<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
						<View style={globalStyles.floatScreenInner}>
							<RegisterForm/>
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
  	)
}


export default reduxForm({
	form: 'Register', // a unique identifier for this form
	enableReinitialize: true,
})(Register);
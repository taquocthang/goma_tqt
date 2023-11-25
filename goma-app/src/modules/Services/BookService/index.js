import { View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import BookServiceForm from './form';
import { reduxForm } from 'redux-form';
import HeaderFloat from '../../../components/common/HeaderFloat';
import { useTranslation } from 'react-i18next';


const BookService = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<ImageBackground source={config.images.headerfloatbg} resizeMode="cover" style={globalStyles.floatSreenBg}></ImageBackground>
			<HeaderFloat title={t('form:bookService')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.container]}>
				<View style={globalStyles.floatScreenBorder}>
					<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
						<View style={globalStyles.floatScreenInner}>
							<BookServiceForm/>
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
  	)
}


export default reduxForm({
	form: 'BookService', // a unique identifier for this form
	enableReinitialize: true,
})(BookService);
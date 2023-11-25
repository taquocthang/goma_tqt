import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text, ImageBackground } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';


const WaitingAssignTechnician = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<ImageBackground source={config.images.serviceFullscreenBg} style={styles.screenBg} resizeMode="cover">
				<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, globalStyles.container]}>
					{/* <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}> */}
						<View style={styles.photoWrap}>
							<Image source={config.images.waitingPhoto} style={styles.photo} alt='Waiting Assign Technician'></Image>
						</View>
						<View style={styles.content}>
							<Text style={styles.title}>{t('service:waitingAssignTechnicianTitle')}</Text>
							<Text style={styles.description}>{t('service:waitingAssignTechnicianDesc')}</Text>
						</View>
						<View style={styles.buttonBox}>
							<TouchableOpacity activeOpacity={0.7}>
								<View style={styles.buttonContent}>
									<LinearGradient colors={['#FD8792', '#FDB7B2']} style={styles.buttonLinearGradient}>
										<Text style={styles.buttonText}>{t('service:goHome')}</Text>
									</LinearGradient>
								</View>
							</TouchableOpacity>
						</View>
					{/* </ScrollView> */}
				</View>
			</ImageBackground>
		</View>
  	)
}


export default WaitingAssignTechnician;
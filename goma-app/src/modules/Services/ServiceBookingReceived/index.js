import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import RatingStar from '../../../components/common/RatingStar';
import ServiceProductInfo from '../../../components/common/ServiceProductInfo';
import CustomerInfo from '../../../components/common/CustomerInfo';


const ServiceBookingReceived = ({ navigation }) => {
	// LANGUAGE
	const { t, i18n } = useTranslation();

	const assignedTechnician = true;

	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:serviceDetail')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={[globalStyles.container, styles.sectionBooking, styles.borderBottom]}>
						<ServiceProductInfo check={assignedTechnician} />
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<CustomerInfo />
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]} >
						<View style={styles.noteSection}>
							<Text style={styles.mainTitle}>{t('service:note')}</Text>
							<Text style={styles.textNote}>{t('service:textNote')}</Text>
						</View>
					</View>

					{
						assignedTechnician &&
						<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
							<View style={styles.photoService}>
								<Text style={styles.mainTitle}>{t('service:servicePhotos')}</Text>
								<View style={styles.listPhoto}>
									<TouchableOpacity style={styles.itemPhoto}>
										<Image source={config.images.servicePhoto} style={styles.servicePhoto} alt="product image" />
										<TouchableOpacity style={styles.areaTxtButton}>
											<Text style={styles.txtButton}>{t('service:previous')}</Text>
										</TouchableOpacity>
									</TouchableOpacity>
									<TouchableOpacity style={styles.itemPhoto}>
										<Image source={config.images.servicePhoto} style={styles.servicePhoto} alt="product image" />
										<TouchableOpacity style={[styles.areaTxtButton, styles.areaTxtButton2]}>
											<Text style={styles.txtButton}>{t('service:next')}</Text>
										</TouchableOpacity>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					}

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.derivativeServices}>
							<Text style={styles.mainTitle}>{t('service:derivativeServices')}</Text>
							<TouchableOpacity style={styles.wrapDerivativeServices}>
								<Text style={styles.titleDerivativeServices}>{t('service:importDerivativeServices')}</Text>
								<Ionicons name={'chevron-forward'} style={styles.chevronForward} size={20} color={config.colors.black} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.paymentMedthod}>
							<Text style={styles.mainTitle}>{t('service:paymentMethods')}</Text>
							<TouchableOpacity style={styles.paymentInCash}>
								<Image source={config.images.cashIcon} style={styles.paymentIcon} alt="Cash Icon" />
								<Text style={styles.titlePayment}>{t('service:payInCash')}</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.paymentMethodDetail}>
							<Text style={styles.mainTitle}>{t('service:paymentDetails')}</Text>
							<View style={styles.itemPaymentDetail}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={styles.label}>{t('service:totalServices')}:</Text>
								</View>
								<Text style={styles.sumPricePayment}>200,000 đ</Text>
							</View>
							<View style={styles.itemPaymentDetail}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={styles.label}>{t('service:serviceDiscounts')}:</Text>
								</View>
								<Text style={styles.pricePayment}>0 đ</Text>
							</View>
							<View style={styles.itemPaymentDetail}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={styles.label}>{t('service:derivativeServices')}:</Text>
								</View>
								<Text style={styles.pricePayment}>0 đ</Text>
							</View>
							<View style={[styles.itemPaymentDetail, styles.lastItemPaymentDetail]}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={[styles.label, styles.boldTextSumPayment]}>{t('service:totalPayout')}:</Text>
								</View>
								<Text style={[styles.sumPricePayment, styles.boldSumPricePayment]}>200,000 đ</Text>
							</View>
						</View>
					</View>
				</ScrollView>

				<View style={[styles.sectionBooking, globalStyles.container]}>
					<View style={[styles.confirmButton, assignedTechnician === false && styles.confirmButtonCancel]}>
						{
							assignedTechnician ?
								<>
									<FormSubmitBtn style={[styles.itemButton]} isgradient={false} label={t('service:cancel')} />
									<FormSubmitBtn style={styles.itemButton} label={t('service:complete')} />
								</> :
								<FormSubmitBtn style={styles.itemButton} isgradient={false} label={t('service:cancel')} />
						}
					</View>
				</View>
			</View>
		</View>
	);
};

export default ServiceBookingReceived;

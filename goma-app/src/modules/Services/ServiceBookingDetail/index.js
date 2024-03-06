import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';
import RatingStar from '../../../components/common/RatingStar';
import ServiceProductInfo from '../../../components/common/ServiceProductInfo';
import CustomerInfo from '../../../components/common/CustomerInfo';

const ServiceBookingDetail = ({ navigation, prop }) => {
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

					{
						assignedTechnician &&
						<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
							<View style={styles.infoTechnician}>
								<Text style={[styles.mainTitle, styles.titleTechnicianInfo]}>{t('service:technicianInformation')}</Text>
								<TouchableOpacity style={styles.contactTechnician}>
									<Ionicons name={'chatbox-ellipses'} size={20} color={config.colors.pink} />
									<Text style={styles.textContact}>{t('service:contact')}</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.detailInfoTechnician}>
								<Image source={config.images.technicianImage} style={styles.techicianAvater} alt="technician image" />
								<View style={styles.nameTechnician}>
									<Text style={styles.textName}>Lê Hồng Trinh</Text>
									<View style={styles.reviewTechnician}>
										<RatingStar star={4.3} />
									</View>
									<Text style={styles.countReview}>( 345 đánh giá )</Text>
								</View>
							</View>
						</View>
					}

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]} >
						<View style={styles.noteSection}>
							<Text style={styles.mainTitle}>{t('service:note')}</Text>
							<Text style={styles.textNote}>{t('service:textNote')}</Text>
						</View>
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.paymentMedthod}>
							<Text style={styles.mainTitle}>{t('service:paymentMethods')}</Text>
							<TouchableOpacity style={styles.paymentInCash}>
								<Image source={config.images.cashIcon} style={styles.paymentIcon} alt="Cash Icon" />
								<Text style={styles.titlePayment}>{t('service:payInCash')}</Text>
								<Ionicons name={'chevron-forward'} style={styles.chevronForward} size={20} color={config.colors.black} />
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
									<FormSubmitBtn style={styles.itemButton} label={t('service:pay')} />
								</> :
								<FormSubmitBtn style={styles.itemButton} isgradient={false} label={t('service:cancel')} />
						}
					</View>
				</View>
			</View>
		</View>
	);
};

export default ServiceBookingDetail;

import React from 'react';
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import ServiceProductInfo from '../../../components/common/ServiceProductInfo';
import CustomerInfo from '../../../components/common/CustomerInfo';

const ServiceBookingDetailCheckout = ({ navigation }) => {
	// LANGUAGE
	const { t, i18n } = useTranslation();

	const assignedTechnician = true;

	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:serviceBookingDetail')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, styles.notSimpleScreenContent]}>
				<View style={[globalStyles.floatScreenContent]}>
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
								<TextInput
									style={styles.textInput}
									placeholder="Nhập văn bản"
								/>
							</View>
						</View>

						<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
							<View style={styles.sectionDiscount}>
								<Text style={styles.mainTitle}>{t('service:discountCode')}</Text>
								<View style={styles.discountCode}>
									<TextInput
										style={[styles.textInput, styles.discountCodeInput]}
										placeholder="Nhập mã giảm giá"
									/>
									<TouchableOpacity style={styles.discountButton}>
										<Text style={styles.textDiscount}>{t('service:apply')}</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>

						<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
							<View style={styles.paymentMedthod}>
								<Text style={styles.mainTitle}>{t('service:paymentMethods')}</Text>
								<TouchableOpacity style={styles.paymentInCash}>
									<Image source={config.images.cashIcon} style={styles.paymentIcon} alt="Cash Icon" />
									<Text style={styles.titlePayment}>{t('service:payInCash')}</Text>
									<Ionicons name={'chevron-forward'} size={20} color={config.colors.black} />
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

					<View style={styles.totalPayout}>
						<View style={styles.wrapTotalPayout}>
							<View style={styles.textTotalPayout}>
								<Text style={styles.textPayout}>{t('service:totalPayout')}</Text>
								<Text style={styles.pricePayout}>200,000 đ</Text>
							</View>
							<TouchableOpacity style={styles.bookNowButton}>
								<Text style={styles.textBookNow}>{t('service:booknow')}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};


export default ServiceBookingDetailCheckout;

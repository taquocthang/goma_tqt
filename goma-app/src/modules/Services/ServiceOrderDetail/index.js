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

const ServiceOrderDetail = ({ navigation, prop }) => {
	// LANGUAGE
	const { t, i18n } = useTranslation();

	const assignedTechnician = true;

	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:orderDetail')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<CustomerInfo />
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]} >
						<Text style={styles.mainTitle}>{t('service:productInformation')}</Text>
						<View style={styles.productInformationSection}>
							<View style={styles.wrapProductInformation}>
								<View style={styles.productInformation}>
									<View style={styles.productInfoPhoto}>
										<Image source={config.images.productInfoPhoto} style={styles.productPhoto} alt="Product Photo" />
										<View style={styles.productInfoDetail}>
											<Text style={styles.textproductInfo}>Brand 01</Text>
											<Text style={styles.textproductInfo}>Dưỡng trắng da</Text>
										</View>
									</View>
								</View>
								<Text style={styles.countProduct}>x1</Text>
							</View>
							<View style={styles.paymentProductDetail}>
								<View style={styles.paymentProductItem}>
									<View style={styles.infoPaymentDetails}>
										<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
										<Text style={styles.label}>{t('service:unitPrice')}:</Text>
									</View>
									<Text style={[styles.pricePayment, styles.sumPricePayment]}>200,000 đ</Text>
								</View>
								<View style={styles.paymentProductItem}>
									<View style={styles.infoPaymentDetails}>
										<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
										<Text style={styles.label}>{t('service:serviceDiscounts')}:</Text>
									</View>
									<Text style={styles.pricePayment}>0 đ</Text>
								</View>
								<View style={[styles.paymentProductItem, styles.lastItemPaymentDetail]}>
									<View style={styles.infoPaymentDetails}>
										<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
										<Text style={[styles.label, styles.boldTextSumPayment]}>{t('service:intoMoney')}:</Text>
									</View>
									<Text style={[styles.sumPricePayment, styles.boldSumPricePayment]}>200,000 đ</Text>
								</View>
							</View>
						</View>
					</View>


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
							</TouchableOpacity>
						</View>
					</View>

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.codeOrderSection}>
							<Text style={styles.mainTitle}>{t('service:codeOrder')}</Text>
							<View style={styles.codeOrderDetail}>
								<View style={styles.paymentProductItem}>
									<View style={styles.infoPaymentDetails}>
										<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
										<Text style={styles.label}>{t('service:timeOrder')}:</Text>
									</View>
									<Text style={styles.pricePayment}>05/10/2023 10:23</Text>
								</View>
								<View style={styles.paymentProductItem}>
									<View style={styles.infoPaymentDetails}>
										<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
										<Text style={styles.label}>{t('service:paymentTime')}:</Text>
									</View>
									<Text style={styles.pricePayment}>_ _</Text>
								</View>
								<View style={styles.paymentProductItem}>
									<View style={styles.infoPaymentDetails}>
										<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
										<Text style={styles.label}>{t('service:deliveryTimeForShipping')}:</Text>
									</View>
									<Text style={styles.pricePayment}>20/10/2023 10:23</Text>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>

				<TouchableOpacity style={styles.evaluateSection}>
					<Text style={styles.textEvaluate}>{t('service:evaluate')}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ServiceOrderDetail;

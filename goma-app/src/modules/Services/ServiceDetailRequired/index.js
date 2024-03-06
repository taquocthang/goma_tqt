import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';
import ServiceProductInfo from '../../../components/common/ServiceProductInfo';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import CustomerInfo from '../../../components/common/CustomerInfo';

const data = [
	{ id: '1', name: 'Combo làm đẹp cho dân văn phòng 1', url: config.images.servicePhoto1, time: 'Thời gian', address: 'Địa chỉ', intoMoney: 'Thành tiền' },
	{ id: '2', name: 'Combo làm đẹp cho dân văn phòng 2', url: config.images.servicePhoto2, time: 'Thời gian', address: 'Địa chỉ', intoMoney: 'Thành tiền' },
];

const RenderListService = ({ item }) => {
	return (
		<View>
			<View style={styles.itemServicePhoto}>
				<Image source={item.url} style={styles.nextServicePhoto} alt="product image" />
				<View style={styles.infoServicePhoto}>
					<Text style={[styles.nameService, styles.itemDetailInfo]}>{item.name}</Text>
					<View style={styles.itemDetailInfo}>
						<Text style={styles.timeService}>{item.time}: </Text>
						<Text style={styles.value}>05/10/2023 10:23</Text>
					</View>
					<View style={styles.itemDetailInfo}>
						<Text style={styles.timeService}>{item.address}: </Text>
						<Text style={styles.value}>06 Trần Hưng Đạo - TP Huế</Text>
					</View>
				</View>
			</View>
			<View style={styles.intoMoney}>
				<Text style={styles.textIntoMoney}>{item.intoMoney}: </Text>
				<Text style={styles.boldSumPricePayment}>199,000 đ</Text>
			</View>
		</View>
	);
};

const ItemSeparator = () => {
	return (
		<View style={styles.borderPhotoService} />
	);
};

const ServiceDetailRequired = ({ navigation }) => {
	// LANGUAGE
	const { t, i18n } = useTranslation();

	const assignedTechnician = true;

	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

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

					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.nextListService}>
							<Text style={styles.mainTitle}>{t('service:nextListOfServices')}</Text>
							<View style={styles.itemService}>
								<FlatList
									data={data}
									renderItem={RenderListService}
									keyExtractor={(item) => item.id}
									ItemSeparatorComponent={ItemSeparator}
								/>
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
									<FormSubmitBtn style={styles.itemButton} label={t('service:accept')} />
								</> :
								<FormSubmitBtn style={styles.itemButton} isgradient={false} label={t('service:cancel')} />
						}
					</View>
				</View>
			</View>
		</View>
	);
};

export default ServiceDetailRequired;

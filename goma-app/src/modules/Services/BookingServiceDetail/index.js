import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';


const BookingServiceDetail = ({ navigation }) => {

	// LANGUAGE
	const { t, i18n } = useTranslation();

	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:serviceDetail')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={[globalStyles.container, styles.bookingInfo]}>
						<View style={[styles.wrapBookingInfor, styles.borderBottomStyle]}>
							<Image source={config.images.productImageThumb} alt='product image' />
							<View style={styles.detailBookingInfor}>
								<Text style={styles.titleBooking}>Combo làm nail đẹp cho dân văn phòng</Text>
								<Text style={styles.priceBooking}>199,000 đ</Text>
								<Text style={styles.textBooking}>Đang phân Kỹ thuật viên</Text>
							</View>
						</View>
					</View>

					<View style={[styles.customerInfo, globalStyles.container, styles.borderBottomStyle]}>
						<Text style={styles.titleDetails}>Thông tin khách hàng</Text>
						<View style={styles.wrapCustomer}>
							<View style={styles.customerDetails}>
								<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
								<View style={styles.itemName}>
									<Text style={styles.firstItemName}>Họ và Tên:</Text>
									<Text style={styles.sencondItemName}>Nguyễn Thị Cầm Sa</Text>
								</View>
							</View>
							<View style={styles.customerDetails}>
								<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
								<View style={styles.itemName}>
									<Text style={styles.firstItemName}>Ngày đặt dịch vụ:</Text>
									<Text style={styles.dateElement}>05/10/2023</Text>
								</View>
							</View>
							<View style={styles.customerDetails}>
								<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
								<View style={styles.itemName}>
									<Text style={styles.firstItemName}>Thời gian sử dụng dịch vụ:</Text>
									<Text style={styles.sencondItemName}>05/10/2023</Text>
									<Text style={styles.dateElement}>10:20</Text>
								</View>
							</View>
							<View style={styles.customerDetails}>
								<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
								<View style={styles.itemName}>
									<Text style={styles.firstItemName}>Địa chỉ:</Text>
									<Text style={styles.sencondItemName}>06 Trần Hưng Đạo, TP Huế.</Text>
								</View>
							</View>
							<View style={[styles.customerDetails, styles.lastCustomerDetails]}>
								<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
								<View style={styles.itemName}>
									<Text style={styles.firstItemName}>Số điện thoại:</Text>
									<Text style={styles.sencondItemName}>0999-087-223</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={[styles.areaTechnicianInfo, globalStyles.container, styles.borderBottomStyle]}>
						<View style={styles.infoTechnician}>
							<Text style={[styles.titleDetails, styles.titleTechnicianInfo]}>Thông tin Kỹ thuật viên</Text>
							<View style={styles.contactTechnician}>
								<Ionicons name={'chatbox-ellipses'} size={20} color={config.colors.pink} />
								<Text style={styles.textContact}>Liên hệ</Text>
							</View>
						</View>
						<View style={styles.detailInfoTechnician}>
							<Image source={config.images.technicianImage} alt='technician image' />
							<View style={styles.nameTechnician}>
								<Text style={styles.textName}>Lê Hồng Trinh</Text>
								<Image source={config.images.starIcon} alt='star icon' />
								<Text style={styles.countReview}>( 345 đánh giá )</Text>
							</View>
						</View>
					</View>

					<View style={[styles.areaNotes, globalStyles.container, styles.borderBottomStyle]}>
						<Text style={styles.titleDetails}>Ghi chú</Text>
						<Text style={styles.paragraphNote}>Hãy đem cho tôi những thứ tốt đẹp nhất. Tôi muốn bạn đem cho tôi thêm nhiều màu sắc đẹp hot nhất hiện nay.</Text>
					</View>

					<View style={[styles.areaDerivativeServices, globalStyles.container, styles.borderBottomStyle]}>
						<Text style={styles.titleDetails}>Phương thức thanh toán</Text>
						<View style={styles.enterService}>
							<Image source={config.images.cashIcon} style={styles.paymentIcon} alt='Cash Icon' />
							<Text style={styles.textEnterService}>Phương thức thanh toán</Text>
							<Ionicons name={'chevron-forward'} size={20} color={config.colors.black} />
						</View>
					</View>

					<View style={[styles.paymentDetails, globalStyles.container, styles.borderBottomStyle]}>
						<Text style={styles.titleDetails}>Chi tiết thanh toán</Text>
						<View style={styles.wrapPaymentDetails}>
							<View style={styles.itemPaymentDetail}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={styles.firstItemName}>Tổng dịch vụ:</Text>
								</View>
								<Text style={styles.sumPricePayment}>200,000 đ</Text>
							</View>
							<View style={styles.itemPaymentDetail}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={styles.firstItemName}>Giảm giá dịch vụ:</Text>
								</View>
								<Text style={styles.pricePayment}>0 đ</Text>
							</View>
							<View style={styles.itemPaymentDetail}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={styles.firstItemName}>Giảm giá dịch vụ:</Text>
								</View>
								<Text style={styles.pricePayment}>0 đ</Text>
							</View>
							<View style={[styles.itemPaymentDetail, styles.lastItemPaymentDetail]}>
								<View style={styles.infoPaymentDetails}>
									<Ionicons name={'ellipse-sharp'} style={styles.ellipeSharp} size={6} color={config.colors.pink} />
									<Text style={[styles.firstItemName, styles.textSumPayment]}>Tổng Thanh Toán:</Text>
								</View>
								<Text style={[styles.sumPricePayment, styles.boldSumPricePayment]}>200,000 đ</Text>
							</View>
						</View>
					</View>

					<View style={[styles.areaButton, globalStyles.container]}>
						<View style={styles.itemButton}>
							<Text style={styles.titleButton}>Hủy</Text>
						</View>
						<View style={[styles.itemButton, styles.pinkItemButton]}>
							<Text style={styles.titleButton}>Thanh toán</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}


export default BookingServiceDetail;
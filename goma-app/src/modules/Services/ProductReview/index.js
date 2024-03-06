import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, TextInput } from 'react-native';
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

const ProductReview = ({ navigation, prop }) => {
	// LANGUAGE
	const { t, i18n } = useTranslation();

	const assignedTechnician = true;

	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:evaluate')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={[styles.sectionBooking, globalStyles.container, styles.borderBottom]}>
						<View style={styles.productInfo}>
							<View style={styles.productImage}>
								<Image source={config.images.productOrderedPhoto} style={styles.productInfoPhoto} alt="Product Info Photo" />
								<Text style={styles.titleProduct}>{t('service:productOrderedTitle')}</Text>
							</View>
							<View style={styles.productInfoDetail}>
								<Text style={styles.countProduct}>x1</Text>
								<Text style={styles.priceProduct}>199,000 đ</Text>
							</View>
						</View>
					</View>

					<View style={[styles.sectionBooking, globalStyles.container]}>
						<View style={styles.productQuality}>
							<Text style={styles.titleProductQuality}>{t('service:productQuality')}</Text>
							<RatingStar star={5.0} />
						</View>
						<TextInput
							style={styles.textInput}
							placeholder="Chia sẻ những đánh giá của bạn"
						/>
					</View>





				</ScrollView>

				<TouchableOpacity style={styles.evaluateSection}>
					<Text style={styles.textEvaluate}>{t('service:evaluate')}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProductReview;

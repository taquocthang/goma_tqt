import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import HeaderSimple from '../../../components/common/HeaderSimple';
import StarSelect from '../../../components/common/StarSelect';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextAreaField from '../../../components/common/TextArea';
import FullBotBtn from '../../../components/common/Input/Button/FullBotBtn';
import styles from './style';


const ReviewService = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:review')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={[globalStyles.container, styles.productInfoWrap]}>
						<View style={styles.productInfo}>
							<Image  style={styles.productImage} source={config.images.productImageThumb} alt='product image' />
							<View style={styles.productInfoContent}>
								<Text style={styles.bookingTitle}>Combo làm nail đẹp cho dân văn phòng</Text>
								<Text style={styles.bookingPrice}>199,000 đ</Text>
							</View>
						</View>
					</View>
					<View>
						<View style={[globalStyles.container]}>
							<View style={styles.reviewStar}>
								<View style={styles.reviewItem}>
									<Text style={styles.reviewLabel}>Chất lượng dịch vụ</Text>
									<StarSelect/>
								</View>
								<View style={styles.reviewItem}>
									<Text style={styles.reviewLabel}>Chất lượng Kỹ thuật viên</Text>
									<StarSelect/>
								</View>
							</View>
							<View style={styles.reviewComment}>
								<Field
									name="review-conmment"
									component={TextAreaField}
									placeholder="Chia sẻ những đánh giá của bạn"
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
			<View style={styles.fixBotBtn}>
				<FullBotBtn label="Đánh giá"/>
			</View>
		</View>
  	)
}


export default reduxForm({
	form: 'ReviewService', // a unique identifier for this form
	enableReinitialize: true,
})(ReviewService);
import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import { useTranslation } from 'react-i18next';
import HeaderSimple from '../../../components/common/HeaderSimple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';


const NotificationDetail = ({navigation}) => {

	// LANGUAGE
    const {t, i18n} = useTranslation();

  	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:notification')} navigation={navigation} />
			
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent, globalStyles.container]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={styles.notiHead}>
						<Image style={styles.productImage} source={config.images.productImageThumb} />
						<View style={styles.notiHeadContent}>
							<Text style={[styles.notiTitle]}>Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng 1</Text>
							<View style={styles.notiDateTime}>
								<Text style={styles.notiDate}>05/10/2023</Text>
								<Text style={styles.notiTime}>10:23</Text>
							</View>
						</View>
					</View>
					<Text style={[styles.noticeContent]}>
						Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng. Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng. Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng. Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng. Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng
						{"\n"}{"\n"}
						Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng. Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng.Bạn đã huỷ dịch dịch vụ Combo làm nail đẹp cho dân văn phòng
					</Text>
				</ScrollView>
			</View>
		</View>
  	)
}


export default NotificationDetail;
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
	{ id: '1', name: 'Danh mục 1', url: config.images.productInfoPhoto },
	{ id: '2', name: 'Danh mục 2', url: config.images.productOrderedPhoto },
	{ id: '3', name: 'Danh mục 4', url: config.images.productCategoriesPhoto3 },
	{ id: '4', name: 'Danh mục 4', url: config.images.productCategoriesPhoto4 },
	{ id: '5', name: 'Danh mục 5', url: config.images.productCategoriesPhoto5 },
];

const RenderListService = ({ item }) => {
	return (
		<TouchableOpacity style={styles.itemServicePhoto}>
			<View style={styles.itemServicePhotoDetail}>
				<Image source={item.url} style={styles.nextServicePhoto} alt="product image" />
				<View style={styles.infoServicePhoto}>
					<Text style={styles.nameService}>{item.name}</Text>
				</View>
			</View>
			<Ionicons name={'chevron-forward'} style={styles.chevronForward} size={20} color={config.colors.black} />
		</TouchableOpacity>
	);
};

const ItemSeparator = () => {
	return (
		<View style={styles.styleBorderService} />
	);
};

const ProductCategories = ({ navigation }) => {
	// LANGUAGE
	const { t, i18n } = useTranslation();

	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	return (
		<View style={globalStyles.screenWrap}>
			<HeaderSimple title={t('service:productCategories')} navigation={navigation} />
			<View style={[globalStyles.floatScreenContent, globalStyles.simpleScreenContent]}>
				<ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} style={[globalStyles.floatScreenScroll]}>
					<View style={[styles.sectionBooking, globalStyles.container]}>
						<FlatList
							data={data}
							renderItem={RenderListService}
							keyExtractor={(item) => item.id}
							ItemSeparatorComponent={ItemSeparator}
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default ProductCategories;

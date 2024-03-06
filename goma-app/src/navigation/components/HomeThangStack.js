import HeaderCustom from '../../components/common/Header';
import HeaderFloat from '../../components/common/HeaderFloat';
import HomeContainer from '../../modules/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeKyBT from '../../modules/Home/indexKyBT';
import HomeThang from '../../modules/Home/indexThang';
import ServiceBookingDetail from '../../modules/Services/ServiceBookingDetail';
import ServiceBookingCheckout from '../../modules/Services/ServiceBookingCheckout';
import ServiceBookingReceived from '../../modules/Services/ServiceBookingReceived';
import ServiceDetailRequired from '../../modules/Services/ServiceDetailRequired';
import ServiceOrderDetail from '../../modules/Services/ServiceOrderDetail';
import ServiceOrder from '../../modules/Services/ServiceOrder';
import ProductCategories from '../../modules/Services/ProductCategories';
import ProductReview from '../../modules/Services/ProductReview';

const Stack = createNativeStackNavigator();
const HomeThangStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen" backBehavior={'HomeScreen'} headerMode="none" >
			<Stack.Screen name="HomeScreen" component={HomeThang} options={({ route }) => ({
				header: (props) => {
					return <HeaderCustom title={'Home'} navigation={props.navigation} />;
				},
			})} />
			<Stack.Screen name="ServiceBookingDetail" component={ServiceBookingDetail} options={{ headerShown: false }} />
			<Stack.Screen name="ServiceBookingCheckout" component={ServiceBookingCheckout} options={{ headerShown: false }} />
			<Stack.Screen name="ServiceBookingReceived" component={ServiceBookingReceived} options={{ headerShown: false }} />
			<Stack.Screen name="ServiceDetailRequired" component={ServiceDetailRequired} options={{ headerShown: false }} />
			<Stack.Screen name="ServiceOrderDetail" component={ServiceOrderDetail} options={{ headerShown: false }} />
			<Stack.Screen name="ServiceOrder" component={ServiceOrder} options={{ headerShown: false }} />
			<Stack.Screen name="ProductCategories" component={ProductCategories} options={{ headerShown: false }} />
			<Stack.Screen name="ProductReview" component={ProductReview} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
};
export default HomeThangStack;

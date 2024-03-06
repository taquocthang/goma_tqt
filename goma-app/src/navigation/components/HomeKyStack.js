import HeaderCustom from "../../components/common/Header";
import HeaderFloat from "../../components/common/HeaderFloat";
import HomeContainer from "../../modules/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from "../../modules/Auth/Register";
import BookService from "../../modules/Services/BookService";
import PaymentMethod from "../../modules/Services/PaymentMethod";
import WaitingAssignTechnician from "../../modules/Services/WaitingAssignTechnician";
import ServiceBookedSuccessfully from "../../modules/Services/ServiceBookedSuccessfully";
import PayByQrCode from "../../modules/Services/PayByQrCode";
import PayByCreditCard from "../../modules/Services/PayByCreditCard";
import NotificationDetail from "../../modules/Services/NotificationDetail";
import EditInformation from "../../modules/User/EditInformation";
import ReviewService from "../../modules/Services/ReviewService";
import HomeKyBT from "../../modules/Home/indexKyBT";

const Stack = createNativeStackNavigator()
const HomeKyStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen" backBehavior={'HomeScreen'} headerMode="none" >
			<Stack.Screen name="HomeScreen" component={HomeKyBT} options={({ route }) => ({
				header: (props) => {
					return <HeaderCustom title={'Home'} navigation={props.navigation} />
				}
			})} />
			<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
			<Stack.Screen name="BookService" component={BookService} options={{ headerShown: false }} />
			<Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
			<Stack.Screen name="WaitingAssignTechnician" component={WaitingAssignTechnician} options={{ headerShown: false }} />
			<Stack.Screen name="ServiceBookedSuccessfully" component={ServiceBookedSuccessfully} options={{ headerShown: false }} />
			<Stack.Screen name="PayByQrCode" component={PayByQrCode} options={{ headerShown: false }} />
			<Stack.Screen name="PayByCreditCard" component={PayByCreditCard} options={{ headerShown: false }} />
			<Stack.Screen name="NotificationDetail" component={NotificationDetail} options={{ headerShown: false }} />
			<Stack.Screen name="EditInformation" component={EditInformation} options={{ headerShown: false }} />
			<Stack.Screen name="ReviewService" component={ReviewService} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
export default HomeKyStack;
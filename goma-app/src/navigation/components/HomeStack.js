import HeaderCustom from "../../components/common/Header";
import HomeContainer from "../../modules/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen" backBehavior={'HomeScreen'} headerMode="none" >
			<Stack.Screen name="HomeScreen" component={HomeContainer} options={({ route }) => ({
				header: (props) => {
					return <HeaderCustom title={'Home'} navigation={props.navigation} />
				}
			})} />
		</Stack.Navigator>
	);
}
export default HomeStack;
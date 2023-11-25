import { StyleSheet } from 'react-native'
import config from '../../../config';

const styles = StyleSheet.create({
    headerBox: {
        width: '100%',
    },
    headerWrap: {
        height: 94,
    },
    btnGoBack: {
        width: 30,
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    boxTitle: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingRight: 30,
    },
    txtTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: config.colors.white
    },
})
export default styles;
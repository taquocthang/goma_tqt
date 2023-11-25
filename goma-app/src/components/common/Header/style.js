import { StyleSheet } from 'react-native'
import config from '../../../config';

const styles = StyleSheet.create({
    headTop: {
        flex: 0,
        backgroundColor: config.colors.green, 
        width: config.width, 
    },
    btnGoBack: {
        width: 21,
        marginLeft: 15,
        justifyContent: 'center', 
        alignItems: 'flex-end'
    },
    boxTitle: {
        width: config.width - 36,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingRight: 36,
    },
    txtTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: config.colors.white
    }
})
export default styles;
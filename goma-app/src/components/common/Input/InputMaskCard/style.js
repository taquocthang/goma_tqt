import { StyleSheet } from 'react-native'
import config from '../../../../config';

const styles = StyleSheet.create({
    inputRowStyle: {
        width: '100%',
    },
    inputStyle: {
        width: '100%',
        height: 41,
        fontSize: 14,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderColor: config.colors.black,
    },
});

export default styles;
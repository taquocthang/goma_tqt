import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    ellipeSharp: {
        marginRight: 7,
    },
    mainTitle: {
        color: config.colors.black,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    detailCustomerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    lastdetailCustomerInfo: {
        marginBottom: 0,
    },
    itemDetailCustomerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: config.colors.darkgray,
    },
    value: {
        color: config.colors.black,
        marginLeft: 10,
    },
});

export default styles;

import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    ratingStar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listStar: {
        flexDirection: 'row',
    },
    pointRating: {
        marginLeft: 10,
        color: config.colors.red,
    },
    productInfo: {
        flexDirection: 'row',
    },
    productImage: {
        width: 95,
        height: 95,
    },
    detailProductInfo: {
        flex: 1,
        marginLeft: 15,
    },
    borderBottomStyle: {
        borderColor: '#FFEBEE',
        borderBottomWidth: 6,
    },
    titleBooking: {
        color: config.colors.black,
        fontWeight: 'bold',
        lineHeight: 20,
        marginBottom: 5,
    },
    priceBooking: {
        color: '#D00000',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statusBooking: {
        color: '#FD9AA3',
        lineHeight: 20,
    },
});

export default styles;

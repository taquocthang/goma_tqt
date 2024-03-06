import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    ellipeSharp: {
        marginRight: 7,
    },
    sectionBooking: {
        paddingVertical: 20,
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
    borderBottom: {
        borderColor: '#FFEBEE',
        borderBottomWidth: 6,
    },
    titleBooking: {
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
    mainTitle: {
        color: config.colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    textInput: {
        color: config.colors.black,
        backgroundColor: '#FFF8F9',
        lineHeight: 20,
        paddingLeft: 15,
    },
    discountCode: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    discountCodeInput: {
        width: 265,
        height: 48,
    },
    discountButton: {
        backgroundColor: config.colors.pink,
        borderRadius: 7,
        width: 90,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDiscount: {
        color: config.colors.white,
    },
    paymentInCash: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentIcon: {
        width: 22,
        height: 13,
    },
    titlePayment: {
        flex: 1,
        color: config.colors.black,
        marginLeft: 10,
    },
    paymentMethodDetail: {
        marginBottom: 50,
    },
    itemPaymentDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoPaymentDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sumPricePayment: {
        color: config.colors.red,
        fontWeight: 'bold',
    },
    pricePayment: {
        color: config.colors.black,
    },
    lastItemPaymentDetail: {
        marginTop: 10,
        marginBottom: 0,
    },
    boldTextSumPayment: {
        color: config.colors.black,
        fontSize: 16,
    },
    boldSumPricePayment: {
        color: config.colors.red,
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalPayout: {
        width: '100%',
        backgroundColor: '#FFF8F9',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    notSimpleScreenContent: {
        marginBottom: 0,
    },
    wrapTotalPayout: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    textPayout: {
        color: config.colors.black,
        fontSize: 12,
    },
    pricePayout: {
        color: config.colors.red,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookNowButton: {
        backgroundColor: config.colors.pink,
        width: 125,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    textBookNow: {
        color: config.colors.white,
    },
});

export default styles;

import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    ellipeSharp: {
        marginRight: 7,
    },
    sectionBooking: {
        paddingVertical: 20,
    },
    borderBottom: {
        borderColor: '#FFEBEE',
        borderBottomWidth: 6,
    },
    mainTitle: {
        color: config.colors.black,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    productPhoto: {
        width: 95,
        height: 95,
    },
    wrapProductInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productInfoPhoto: {
        flexDirection: 'row',
    },
    paymentProductDetail: {
        marginTop: 20,
    },
    productInfoDetail: {
        marginLeft: 10,
    },
    textproductInfo: {
        color: config.colors.black,
        fontWeight: 'bold',
    },
    paymentProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    countProduct: {
        color: config.colors.black,
        textAlignVertical: 'bottom',
    },
    label: {
        color: config.colors.darkgray,
    },
    textNote: {
        color: config.colors.black,
        lineHeight: 20,
    },
    paymentInCash: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paymentIcon: {
        width: 22,
        height: 13,
    },
    titlePayment: {
        color: config.colors.black,
        flex: 1,
        marginLeft: 10,
    },
    chevronForward: {
        flex: 1,
        textAlign: 'right',
        right: -5,
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
    evaluateSection: {
        width: '100%',
        height: 48,
        backgroundColor: '#FD8792',
        justifyContent: 'center',
    },
    textEvaluate: {
        color: config.colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default styles;

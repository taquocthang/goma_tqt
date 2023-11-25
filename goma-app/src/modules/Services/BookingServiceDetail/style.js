import { StyleSheet } from 'react-native'
import config from '../../../config';

const styles = StyleSheet.create({
    ellipeSharp: {
        marginRight: 7
    },

    wrapBookingInfor: {
        flexDirection: 'row',
        paddingTop: 10
    },

    detailBookingInfor: {
        marginLeft: 20
    },

    borderBottomStyle: {
        borderBottomWidth: 2,
        width: '100%',
        borderColor: '#FFEBEE',
        paddingBottom: 20,
    },

    titleBooking: {
        fontWeight: '500',
        width: 240,
        lineHeight: 20,
        marginBottom: 5
    },

    priceBooking: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D00000',
        marginBottom: 5
    },

    textBooking: {
        color: '#FD9AA3',
        lineHeight: 20
    },

    customerInfo: {
        paddingTop: 20,
    },

    titleDetails: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15
    },

    customerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    lastCustomerDetails: {
        marginBottom: 0
    },

    itemName: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    firstItemName: {
        color: config.colors.gray,
        fontSize: 14
    },

    sencondItemName: {
        color: config.colors.black,
        marginLeft: 10,
    },

    dateElement: {
        color: config.colors.black,
        marginLeft: 10
    },

    areaTechnicianInfo: {
        paddingTop: 20
    },

    infoTechnician: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    contactTechnician: {
        flexDirection: 'row',
    },

    titleTechnicianInfo: {
        marginBottom: 0
    },

    textContact: {
        marginLeft: 5
    },

    detailInfoTechnician: {
        flexDirection: 'row'
    },

    nameTechnician: {
        marginLeft: 10
    },

    textName: {
        color: config.colors.black,
        fontWeight: '500',
        marginBottom: 10
    },

    countReview: {
        color: config.colors.gray,
        fontSize: 12,
        marginTop: 5
    },

    areaNotes: {
        paddingTop: 20,
        marginBottom: 20
    },

    paragraphNote: {
        lineHeight: 20,
        color: config.colors.black,
    },

    areaDerivativeServices: {
        marginBottom: 20
    },

    enterService: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    paymentIcon: {
        width: 22,
        height: 13
    },

    textEnterService: {
        flex: 2,
        marginLeft: 10,
        color: config.colors.black
    },

    itemPaymentDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    infoPaymentDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    sumPricePayment: {
        color: config.colors.red,
        fontWeight: 'bold'
    },

    pricePayment: {
        color: config.colors.black,
    },

    lastItemPaymentDetail: {
        marginTop: 10
    },

    textSumPayment: {
        color: config.colors.black,
        fontSize: 16
    },

    boldSumPricePayment: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    areaButton: {
        paddingTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemButton: {
        width: 180,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#B5B5B5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    pinkItemButton: {
        backgroundColor: '#FD8792',
    },

    titleButton: {
        color: '#fff',
        fontWeight: '500'
    }
});

export default styles;
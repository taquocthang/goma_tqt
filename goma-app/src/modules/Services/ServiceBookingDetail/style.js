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
    infoTechnician: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    contactTechnician: {
        flexDirection: 'row',
    },
    titleTechnicianInfo: {
        marginBottom: 0,
    },
    textContact: {
        marginLeft: 5,
    },
    detailInfoTechnician: {
        flexDirection: 'row',
    },
    techicianAvater: {
        width: 95,
        height: 95,
    },
    nameTechnician: {
        flex: 1,
        marginLeft: 15,
    },
    textName: {
        color: config.colors.black,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    reviewTechnician: {
        flexDirection: 'row',
    },
    starRating: {
        marginRight: 10,
    },
    countReview: {
        color: config.colors.darkgray,
        fontSize: 12,
        marginTop: 5,
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
    confirmButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmButtonCancel: {
        justifyContent: 'center',
    },
    itemButton: {
        width: 185,
        backgroundColor: '#B5B5B5',
    },
    itemButtonCancel: {
        justifyContent: 'center',
    },

});

export default styles;

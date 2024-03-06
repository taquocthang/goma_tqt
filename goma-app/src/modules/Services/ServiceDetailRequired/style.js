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
        color: config.colors.gray,
        fontSize: 12,
        marginTop: 5,
    },
    textNote: {
        color: config.colors.black,
        lineHeight: 20,
    },
    listPhoto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    servicePhoto: {
        width: 180,
        height: 160,
    },
    areaTxtButton: {
        position: 'absolute',
        top: 3,
        left: 3,
        width: 70,
        height: 25,
        borderRadius: 20,
        backgroundColor: '#B5B5B5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaTxtButton2: {
        backgroundColor: '#FD9AA3',
    },
    txtButton: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
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
    label: {
        color: config.colors.darkgray,
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
    itemServicePhoto: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    nextServicePhoto: {
        width: 95,
        height: 95,
    },
    infoServicePhoto: {
        marginLeft: 10,
    },
    borderPhotoService: {
        backgroundColor: '#888888',
        height: 1,
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    nameService: {
        color: config.colors.black,
        fontWeight: 'bold',
    },
    timeService: {
        color: config.colors.darkgray,
    },
    value: {
        color: config.colors.black,
    },
    itemDetailInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    intoMoney: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    textIntoMoney: {
        fontWeight: 'bold',
    },

});

export default styles;

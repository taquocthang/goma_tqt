import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    titleProduct: {
        color: config.colors.black,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    productImage: {
        flexDirection: 'row',
    },
    productInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productInfoDetail: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'flex-end',
    },
    countProduct: {
        color: config.colors.black,
    },
    priceProduct: {
        color: config.colors.red,
        fontWeight: 'bold',
    },
    borderBottom: {
        borderColor: '#FFEBEE',
        borderBottomWidth: 6,
    },
    sectionBooking: {
        paddingVertical: 20,
    },
    productQuality: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    titleProductQuality: {
        color: config.colors.black,
        fontWeight: 'bold',
    },
    textInput: {
        color: config.colors.black,
        backgroundColor: '#FFF8F9',
        height: 150,
        textAlignVertical: 'top',
        paddingLeft: 15,
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

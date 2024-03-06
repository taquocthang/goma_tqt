import { StyleSheet } from 'react-native'
import config from '../../../config';

const styles = StyleSheet.create({
    productInfoWrap: {
        borderBottomWidth: 6,
        borderColor: '#FFEBEE',
        paddingBottom: 15,
    },
    productInfo: {
        flexDirection: 'row',
    },
    productInfoContent: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 3,
    },
    productImage: {
        width: 95,
        height: 95,
        resizeMode: 'cover',
    },
    bookingTitle: {
        color: config.colors.black,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 21,
    },
    bookingPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        color: config.colors.red,
        marginTop: 4,
    },

    reviewStar: {
        marginTop: 15,
    },
    reviewItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    reviewLabel: {
        flex: 1,
        color: config.colors.black,
        fontSize: 15,
        fontWeight: 'bold',
    },
    reviewComment: {
        marginTop: 5,
    },
    fixBotBtn: {
        position: 'absolute',
        bottom: 0,
    },
});

export default styles;
import { StyleSheet } from 'react-native'
import config from '../../../config';

const styles = StyleSheet.create({
    screenContent: {
        flex: 2,
    },
    screenTitle: {
        textAlign: 'center',
        color: config.colors.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    wrapQrcode: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    rqImage: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
    },
    bankInfo: {
        marginTop: 15,
    },
    bankLine: {
        textAlign: 'center',
        fontSize: 14,
        color: config.colors.black,
        marginBottom: 2,
    },
    bankNote: {
        marginTop: 15,
    },
    bankNoteTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: config.colors.black,
        textDecorationLine: 'underline',

    },
    bankNoteDesc: {
        color: config.colors.black,
        fontSize: 14,
        lineHeight: 25,
        marginTop: 3,
        paddingHorizontal: 12,
    },
    screenButton: {
        flex: 1,
    },
});

export default styles;
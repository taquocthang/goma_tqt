import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    paymentItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#B5B5B5',
        borderStyle: 'dashed',
    },
    paymentIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    paymentName: {
        flex: 1,
        fontSize: 15,
        color: '#000',
        textAlign: 'left',
        marginLeft: 12,
    },
    paymentArrow: {
        width: 15,
    }
});

export default styles;
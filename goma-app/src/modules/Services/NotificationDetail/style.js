import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    notiHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productImage: {
        width: 95,
        height: 95,
    },
    notiHeadContent: {
        flex: 1,
        marginLeft: 10,
    },
    notiTitle: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    notiDateTime: {
        flexDirection: 'row',
        marginTop: 5,
    },
    notiDate: {
        color: '#B5B5B5',
        fontSize: 13,
    },
    notiTime: {
        color: '#B5B5B5',
        fontSize: 13,
        marginLeft: 10,
    },
    noticeContent: {
        color: '#6F6F6F',
        fontSize: 15,
        lineHeight: 21,
        marginTop: 25,
    }
});

export default styles;
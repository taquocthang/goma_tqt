import { StyleSheet, Dimensions } from 'react-native';
import config from './config';

export const globalStyles = StyleSheet.create({
    container: {
        paddingHorizontal: '3%',
    },
    screenWrap: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative',
    },

    floatSreenBg: {
        width: '100%',
        height: 226,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    floatScreenContent: {
        flex: 1,
    },
    floatScreenBorder: {
        overflow: 'hidden',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
    },
    floatScreenScroll: {
        width: '100%',
    },
    floatScreenInner: {
        paddingHorizontal: '4%',
        paddingVertical: 15,
        paddingBottom: 50,
    },

    simpleScreenContent: {
        marginVertical: 30,
    },

    inputRowStyle: {
        width: '100%',
        marginBottom: 20,
    },
    labelInputStyle: {
        color: config.colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
        borderWidth: 0,
    },
    inputStyle: {
        flex: 1,
        width: '100%',
        height: 48,
        backgroundColor: "#FFF8F9",
        fontSize: 14,
        paddingHorizontal: 15,
        borderWidth: 0,
    },
    inputStyleFocus: {
        borderWidth: 1,
        borderColor: '#FD9AA3',
    },

})
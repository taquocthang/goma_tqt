import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screenBg: {
        flex: 1,
    },
    photoWrap: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        width: 182,
        height: 145.24,
    },
    content: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 20,
        marginTop: 20,
    },
    buttonBox: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    buttonContent: {
        width: 225,
        height: 48,
        overflow: 'hidden',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLinearGradient: {
        width: '100%',
        height: '100%',
    },
    buttonText: {
        width: '100%',
        height: '100%',
        fontSize: 16,
        lineHeight: 48,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;
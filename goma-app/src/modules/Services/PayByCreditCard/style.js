import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    formWrap: {
        flex: 1,
    },
    formField: {
        backgroundColor: '#FFF8F9',
        overflow: 'hidden',
        borderRadius: 15,
        paddingHorizontal: '4.5%',
        paddingTop: 20,
        paddingBottom: 35,
    },
    formRow: {
        marginBottom: 15,
    },
    formColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    formColumnLeft: {
        width: '60.5%',
    },
    formColumnRight: {
        width: '34.5%',
    },
    formButton: {
        marginTop: config.height - 595,
    }
});

export default styles;
import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    itemServicePhoto: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemServicePhotoDetail: {
        flexDirection: 'row',
    },
    nextServicePhoto: {
        width: 80,
        height: 80,
    },
    infoServicePhoto: {
        marginLeft: 10,
    },
    styleBorderService: {
        borderColor: '#B5B5B5',
        borderTopWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 10,
        marginTop: 10,
    },
    nameService: {
        color: config.colors.black,
        fontWeight: 'bold',
    },


});

export default styles;

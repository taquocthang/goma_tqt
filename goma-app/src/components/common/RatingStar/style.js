import { StyleSheet } from 'react-native';
import config from '../../../config';

const styles = StyleSheet.create({
    ratingStar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listStar: {
        flexDirection: 'row',
    },
    pointRating: {
        marginLeft: 10,
        color: config.colors.red,
    },
});

export default styles;

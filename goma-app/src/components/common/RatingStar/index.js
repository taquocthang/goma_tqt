import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import config from '../../../config';
import styles from './style';

const RatingStar = ({
    star = 1,
    maxStar = 5,
}) => {
    let starIcon = [];
    let currentStar = Math.round(star);
    let starDisplay = currentStar == star ? currentStar + '.0' : star;
    for (let i = 0; i < maxStar; i++) {
        if (i < currentStar) {
            starIcon.push(
                <FontAwesome key={i} name={'star'} size={21} color={config.colors.star} />
            );
        } else {
            starIcon.push(
                <FontAwesome key={i} name={'star'} size={21} color={config.colors.nonStar} />
            );
        }
    }
    return (
        <View style={styles.ratingStar}>
            <View style={styles.listStar}>
                {starIcon}
            </View>
            <Text style={styles.pointRating}>{starDisplay} / {maxStar}</Text>
        </View>
    );
};

export default RatingStar;

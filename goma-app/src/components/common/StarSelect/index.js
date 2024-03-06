import React, { useState } from 'react'
import { View, CheckIcon, FormControl, Image, Select, WarningOutlineIcon } from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Text, StyleSheet } from 'react-native'
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import styles from './style';

const StarSelect = ({
    startDefault = 5,
    ...restProps
}) => {

    const [startValue, setStartValue] = useState(startDefault);

    const changeRating = (rating) => {
        setStartValue(rating);
    }

    return (
        <View style={styles.ratingWrap}>
            <Rating
                ratingCount={5}
                ratingColor="#F7D100"
                imageSize={21}
                startingValue={startValue}
                jumpValue={1.0}
                fractions={1}
                onFinishRating={(rating)=>changeRating(rating)}
            />
            <Text style={styles.ratingPoint}>{startValue}.0/5</Text>
        </View>
    )
        
};
export default StarSelect;
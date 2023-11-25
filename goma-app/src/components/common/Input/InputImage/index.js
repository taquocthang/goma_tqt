import React, { useState } from 'react'
import { View, CheckIcon, FormControl, Select, WarningOutlineIcon } from "native-base";
import { Text, TouchableOpacity, Image } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import config from '../../../../config';
import { globalStyles } from '../../../../globalStyles';
import styles from './style';

const inputImage = ({
    label,
    placeholder,
    require,
    onValueChange = () => {},
    meta: { touched, error, warning },
    ...restProps
}) => {

    let pickerOptions = {
        mediaType: 'photo',
    };
    const [imageSource, setImageSource] = useState(config.images.inputimageplacehoder);

    const openGallery = async() => {
        const result = await launchImageLibrary(pickerOptions);
        setImageSource({uri: result.assets[0].uri});
    }

    return (
        <FormControl isInvalid={(error && touched)} {...restProps} style={globalStyles.inputRowStyle}>
            {
                label && 
                <Text style={globalStyles.labelInputStyle}>
                    {label} {require && <Text style={{ color: config.colors.red }}>*</Text>}
                </Text>
            }
            <View style={styles.imgselectWrap}>
                <TouchableOpacity activeOpacity={0.8} style={styles.imgselectTouch} onPress={()=>openGallery()}>
                    <Image style={styles.imgDisplay} source={imageSource} alt='Avatar'/>
                </TouchableOpacity>
            </View>
            {(error && touched) &&
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{fontSize: 'xs'}}>
                {error}
            </FormControl.ErrorMessage>
            }
        </FormControl>
    )
        
};
export default inputImage;
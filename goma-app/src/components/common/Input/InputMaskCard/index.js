import React, { useState } from 'react'
import {
    Stack,
    Input,
    FormControl,
    WarningOutlineIcon,
    Icon,
  } from "native-base"
import { Text } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { globalStyles } from '../../../../globalStyles';
import config from '../../../../config';
import styles from './style';
const InputMaskCard = ({
    placeholder,
    keyboardType,
    helperText,
    secureTextEntry,
    input,
    mask,
    propsInput,
    meta: { touched, error, warning },
    require,
    ...restProps
}) => {

    const [value, setValue] = React.useState('');
    
    return (
        <FormControl isInvalid={(error && touched)} {...restProps} style={styles.inputRowStyle}>
            <Stack w={'100%'} mx="auto" borderWidth={0}>
                <MaskInput
                    value={value}
                    style={[styles.inputStyle]}
                    paddingLeft={0}
                    paddingRight={0}
                    borderWidth={0}
                    placeholder={placeholder}
                    placeholderColor="#888888"
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry ? true : false}
                    {...propsInput}
                    onChange={ (event) => input.onChange(event) }
                    onChangeText={(masked, unmasked) => {
                        setValue(masked);
                    }}
                    mask={mask}
                />
            </Stack>

                {
                (error && touched) &&
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{fontSize: 'xs'}}>
                        {error}
                    </FormControl.ErrorMessage>
                }
                {
                    helperText && 
                    <Text style={globalStyles.helperTextForm}>
                        {helperText}
                    </Text>
                }
        </FormControl>
        
    )
}
export default InputMaskCard;
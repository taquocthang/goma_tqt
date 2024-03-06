import React from 'react'
import {
    FormControl,
    TextArea,
  } from "native-base"
import { Text } from 'react-native';
import styles from './style';
import { globalStyles } from '../../../globalStyles';
import config from '../../../config';

const TextAreaField = ({
    label,
    placeholder,
    countText,
    showlength = false,
    textLength,
    helperText,
    minHeight,
    require,
    input,
    meta: { touched, error, warning }
}) => {
    return (
        <FormControl>
            {
                label && 
                <Text style={globalStyles.labelInputStyle}>
                    {label} {require && <Text style={{ color: config.colors.red }}>*</Text>}
                </Text>
            }
            <TextArea 
                _focus={{ borderColor: config.colors.pink, borderWidth: 1 }}
                borderWidth={0}
                h={150}
                maxLength={textLength}
                style={[globalStyles.inputStyle ,styles.textAreaStyle]}
                placeholder={placeholder}
                placeholderColor={config.colors.gray}
                onChange={ (event) =>  input.onChange(event)}
                onBlur={ (event) => input.onBlur(event) }
                w="100%" 
            />
            {
                showlength && 
                <Text style={styles.countTextStyle}>
                    {countText ?? 0}/{textLength ?? 0}
                </Text>
            }
        </FormControl>
    )
}
export default TextAreaField;
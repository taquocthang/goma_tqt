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
    textLength,
    helperText,
    minHeight,
    input,
    meta: { touched, error, warning }
}) => {
    return (
        <FormControl>
            {
                label && 
                <Text style={globalStyles.labelInputStyle}>{label}</Text>
            }
            <TextArea 
                _input={{
                    selectionColor: config.colors.green,
                    cursorColor: config.colors.green,
                }}
                _focus={{ backgroundColor: 'white' }}
                minHeight={minHeight ?? 50}
                maxLength={textLength}
                style={styles.textAreaStyle}
                placeholder={placeholder}
                placeholderColor={config.colors.gray}
                onChange={ (event) =>  input.onChange(event)}
                onBlur={ (event) => input.onBlur(event) }
                w="100%" 
                 />
                <Text style={styles.countTextStyle}>
                    {countText ?? 0}/{textLength ?? 0}
                </Text>
        </FormControl>
    )
}
export default TextAreaField;
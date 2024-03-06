import React, { useState } from 'react'
import {
    Stack,
    Input,
    FormControl,
    WarningOutlineIcon,
    Icon,
  } from "native-base"
import { Text } from 'react-native';
import { globalStyles } from '../../../../globalStyles';
import config from '../../../../config';
import styles from './style';
const InputFieldCard = ({
    placeholder,
    keyboardType,
    helperText,
    secureTextEntry,
    input,
    propsInput,
    meta: { touched, error, warning },
    icon,
    iconName,
    iconColor,
    require,
    ...restProps
}) => {
    
    return (
        <FormControl isInvalid={(error && touched)} {...restProps} style={styles.inputRowStyle}>
            <Stack w={'100%'} mx="auto" borderWidth={0}>
                <Input 
                    _input={{
                        selectionColor: config.colors.pink,
                        cursorColor: config.colors.pink,
                    }}
                    style={[styles.inputStyle]}
                    variant="underlined"
                    borderBottomColor={config.colors.black}
                    focusOutlineColor={config.colors.black}
                    paddingLeft={0}
                    paddingRight={0}
                    borderWidth={0}
                    placeholder={placeholder}
                    placeholderColor="#888888"
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry ? true : false}
                    {...propsInput}
                    onChange={ (event) => input.onChange(event) }
                    returnKeyType={'done'}
                    autoCorrect={false}
                    spellCheck={false}
                    autoCompleteType={false} 
                    autoCapitalize="none"
                    InputRightElement={
                        icon && <Icon
                        as={icon}
                        name={iconName}
                        size={iconName ? 5 : 0}
                        mx={2}
                        color={iconColor}
                        />
                        
                    }
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
export default InputFieldCard;
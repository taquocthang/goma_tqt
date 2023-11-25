import React from 'react'
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
const InputField = ({
    label,
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
        <FormControl isInvalid={(error && touched)} {...restProps}>
            {
                label && 
                <Text style={globalStyles.labelInputStyle}>
                    {label} {require && <Text style={{ color: config.colors.red }}>*</Text>}
                </Text>
            }
            <Stack w={'100%'} mx="auto" borderWidth={1} borderRadius={5} borderColor={config.colors.green}>
                <Input 
                    _input={{
                        selectionColor: config.colors.green,
                        cursorColor: config.colors.green,
                    }}
                    style={globalStyles.inputStyle}
                    placeholder={placeholder}
                    placeholderColor={config.colors.gray}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry ? true : false}
                    {...propsInput}
                    onChange={ (event) => input.onChange(event) }
                    onBlur={ (event) => input.onBlur(event) }
                    returnKeyType={'done'}
                    autoCorrect={false}
                    spellCheck={false}
                    autoCompleteType={false} 
                    autoCapitalize="none"
                    InputRightElement={
                        <Icon
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
export default InputField;


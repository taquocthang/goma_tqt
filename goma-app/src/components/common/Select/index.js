import React from 'react'
import { View, CheckIcon, FormControl, Image, Select, WarningOutlineIcon } from "native-base";
import { Text, StyleSheet } from 'react-native'
import config from '../../../config';
import { globalStyles } from '../../../globalStyles';
import styles from './style';

const SelectField = ({
    label,
    placeholder,
    option,
    selectedValue,
    require,
    onValueChange = () => { },
    meta: { touched, error, warning },
    ...restProps
}) => {
    return (
        <FormControl isInvalid={(error && touched)} {...restProps} style={globalStyles.inputRowStyle}>
            {
                label &&
                <Text style={globalStyles.labelInputStyle}>
                    {label} {require && <Text style={{ color: config.colors.red }}>*</Text>}
                </Text>
            }
            <View style={styles.selectWrap}>
                <Select
                    borderWidth={0}
                    style={[globalStyles.inputStyle, { _focus: globalStyles.inputStyleFocus }]}
                    accessibilityLabel={placeholder}
                    placeholder={placeholder}
                    selectedValue={selectedValue}
                    dropdownOpenIcon={<Image source={config.images.selectarrow} style={styles.selectIcon} alt='Dropdown' />}
                    dropdownCloseIcon={<Image source={config.images.selectarrow} style={styles.selectIcon} alt='Dropdown' />}
                    onValueChange={onValueChange}
                    dropdownIcon={() => null}
                >
                    {
                        option && option.map((_value, index) => {
                            return (
                                <Select.Item key={index} label={_value.name} value={_value.value} />
                            )
                        })
                    }
                </Select>
            </View>
            {(error && touched) &&
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{ fontSize: 'xs' }}>
                    {error}
                </FormControl.ErrorMessage>
            }
        </FormControl>
    )

};
export default SelectField;
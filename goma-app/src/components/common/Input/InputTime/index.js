import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native';
import {
    Input,
    FormControl,
    WarningOutlineIcon,
    Stack
  } from "native-base"
import DatePicker from 'react-native-date-picker'
import {Masks, useMaskedInputProps} from 'react-native-mask-input';
import moment from 'moment';
import { globalStyles } from '../../../../globalStyles';
import config from '../../../../config';
import styles from './style';

const InputTimeField = ({
    label,
    keyboardType,
    input,
    propsInput,
    minDate,
    require,
    setVal = () => {},
    meta: { touched, error, warning },
    ...restProps
}) => {
    const [date, setDate] = useState(new Date());
    const [TimeOutput, setTimeOutput] = useState();

    const [open, setOpen] = useState(false);
    const maskedInputProps = useMaskedInputProps({
        value: TimeOutput,
        onChangeText: v => {
            setTimeOutput(v)
            let date = moment(v);

            if(date.isValid()){
                setVal(moment(new Date(v)).format('HH : mm'));
                setDate(new Date(v))
            }
        },
        mask: Masks.DATE_YYYYMMDD
      });

    const handleCalendar = (date) => {
        let date_format = moment(date).format('HH : mm')
        setOpen(false);
        setDate(date);
        setVal(date_format);
        setTimeOutput(date_format)
    }
    return (
        <FormControl isInvalid={(error && touched)} {...restProps} style={globalStyles.inputRowStyle}>
            {
                label && 
                <Text style={globalStyles.labelInputStyle}>
                    {label} {require && <Text style={{ color: config.colors.red }}>*</Text>}
                </Text>
            }
            <Stack w={'100%'} mx="auto" borderWidth={0} style={styles.inputWrap}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=> setOpen(true)}>
                    <Input 
                        style={globalStyles.inputStyle}
                        borderWidth={0}
                        placeholderColor={config.colors.placehoder}
                        keyboardType={keyboardType}
                        value={TimeOutput}
                        // {...input}
                        // {...maskedInputProps}
                        returnKeyType={'done'}
                        placeholder="__ : __"
                        editable={false}
                    />
                    <Image source={config.images.clock} style={styles.timeIcon} alt='Clock'/>
                </TouchableOpacity>
            </Stack>
            <DatePicker
                mode="time"
                modal
                open={open}
                date={date}
                locale="vi"
                onConfirm={(date) => handleCalendar(date)}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            {(error && touched) &&
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{fontSize: 'xs'}}>
                {error}
            </FormControl.ErrorMessage>
            }
        </FormControl>
        
    )
}
export default InputTimeField;


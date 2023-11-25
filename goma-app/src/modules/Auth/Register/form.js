import React, { Component } from 'react';
import { View } from 'react-native';
import InputField from '../../../components/common/Input/InputField/index'
import InputDate from '../../../components/common/Input/InputDate/index'
import Select from '../../../components/common/Select/index'
import inputImage from '../../../components/common/Input/InputImage/index'
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';
import { Field } from 'redux-form';
import styles from './style';
import { useTranslation } from 'react-i18next';


const RegisterForm = () => {

    // LANGUAGE
    const {t, i18n} = useTranslation();

    const selectItems = [
        { name: 'Option 1', value: 'option1' },
        { name: 'Option 2', value: 'option2' },
        { name: 'Option 3', value: 'option3' },
    ];

    return (
        <View style={styles.formWrap}>
            <Field
                label={t('form:fullname')}
                name="name"
                component={InputField}
                placeholder="Họ và tên"
            />
            <Field
                label={t('form:birthdate')}
                name="birthdate"
                component={InputDate}
            />
            <Field
                label={t('form:phonenumber')}
                name="phone"
                component={InputField}
                placeholder="xxx-xxx-xxxx"
                keyboardType="numeric"
            />
            <Field
                label={t('form:provinceCity')}
                name="province-city"
                component={Select}
                option={selectItems}
                placeholder={t('form:provinceCityPlaceholder')}
            />
            <Field
                label={t('form:district')}
                name="district"
                component={Select}
                option={selectItems}
                placeholder={t('form:districtPlaceholder')}
            />
            <Field
                label={t('form:wards')}
                name="wards"
                component={Select}
                option={selectItems}
                placeholder={t('form:wardsPlaceholder')}
            />
            <Field
                label={t('form:address')}
                name="address"
                component={InputField}
                placeholder={t('form:addressPlaceholder')}
            />
            <Field
                label={t('form:avatar')}
                name="avatar"
                component={inputImage}
            />
            <FormSubmitBtn label={t('form:register')}/>
        </View>
    );
};


export default RegisterForm;

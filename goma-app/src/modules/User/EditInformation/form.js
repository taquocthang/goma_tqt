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


const EditInfoForm = () => {

    // LANGUAGE
    const {t, i18n} = useTranslation();

    const stateItems = [
        { name: 'Thừa Thiên Huế', value: 'Thừa Thiên Huế' },
    ];
    const cityItems = [
        { name: 'Thành Phố Huế', value: 'Thành Phố Huế' },
    ];
    const wardsItems = [
        { name: 'Phường Đông Ba', value: 'Phường Đông Ba' },
    ];

    return (
        <View style={styles.formWrap}>
            <Field
                label={t('form:fullname')}
                name="name"
                fieldValue="Nguyễn Thị Cầm Ca"
                component={InputField}
                placeholder="Họ và tên"
            />
            <Field
                label={t('form:birthdate')}
                name="birthdate"
                fieldValue="05/10/1999"
                component={InputDate}
            />
            <Field
                label={t('form:phonenumber')}
                name="phone"
                fieldValue="099-908-7223"
                component={InputField}
                placeholder="xxx-xxx-xxxx"
                keyboardType="numeric"
            />
            <Field
                label={t('form:provinceCity')}
                name="province-city"
                selectedValue="Thừa Thiên Huế"
                component={Select}
                option={stateItems}
                placeholder={t('form:provinceCityPlaceholder')}
            />
            <Field
                label={t('form:district')}
                name="district"
                selectedValue="Thành Phố Huế"
                component={Select}
                option={cityItems}
                placeholder={t('form:districtPlaceholder')}
            />
            <Field
                label={t('form:wards')}
                name="wards"
                selectedValue="Phường Đông Ba"
                component={Select}
                option={wardsItems}
                placeholder={t('form:wardsPlaceholder')}
            />
            <Field
                label={t('form:address')}
                name="address"
                fieldValue="06 Trần Hưng Đạo"
                component={InputField}
                placeholder={t('form:addressPlaceholder')}
            />
            <Field
                label={t('form:avatar')}
                name="avatar"
                fieldValue={require('../../../assets/images/imagedata/image_field_dummy.jpg')}
                component={inputImage}
            />
            <FormSubmitBtn label={t('form:register')}/>
        </View>
    );
};


export default EditInfoForm;

import React, { Component, useState } from 'react';
import { View } from 'react-native';
import InputField from '../../../components/common/Input/InputField/index';
import InputDate from '../../../components/common/Input/InputDate/index';
import InputTime from '../../../components/common/Input/InputTime/index';
import Select from '../../../components/common/Select/index'
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';
import { Field } from 'redux-form';
import styles from './style';
import { useTranslation } from 'react-i18next';


const BookServiceForm = () => {

    // LANGUAGE
    const {t} = useTranslation();

    const [servicelocation, setServiceLocation] = useState('');
    const [technicians, setTechnicians] = useState('');

    const serviceLocationItems = [
        { name: 'Dịch vụ tại nhà', value: 'service-home' },
        { name: 'Dịch vụ tại tiệm', value: 'service-store' },
    ];

    const serviceTypeItems = [
        { name: 'Làm nail', value: 'make-mail' },
    ];

    const techniciansItems = [
        { name: 'Chỉ định Kỹ thuật viên', value: 'technician-appoint' },
        { name: 'Chọn Kỹ thuật viên theo danh sách đề xuất', value: 'technician-suggested-list' },
        { name: 'Chọn Kỹ thuật viên ngẫu nhiên', value: 'technician-random' },
    ];

    const handleServiceLocation = (itemValue) => {
        setServiceLocation(itemValue);
    }

    const handleAssignTechnicians = (itemValue) => {
        setTechnicians(itemValue);
    }

    return (
        <View style={styles.formWrap}>
            <Field
                label={t('form:serviceLocation')}
                name="service-location"
                component={Select}
                option={serviceLocationItems}
                placeholder={t('form:serviceLocationPlaceholder')}
                onValueChange={itemValue => handleServiceLocation(itemValue)}
            />
            {
                servicelocation == 'service-home' &&
                <Field
                    label={t('form:serviceType')}
                    name="service-type"
                    component={Select}
                    option={serviceTypeItems}
                    placeholder={t('form:serviceTypePlaceholder')}
                />
            }
            {
                servicelocation == 'service-home' &&
                <Field
                    label={t('form:chooseAssignTechnicians')}
                    name="technicians"
                    component={Select}
                    option={techniciansItems}
                    placeholder={t('form:chooseAssignTechnicians')}
                    onValueChange={itemValue => handleAssignTechnicians(itemValue)}
                />
            }
            <Field
                label={t('form:serviceDate')}
                name="service-date"
                component={InputDate}
            />
            <Field
                label={t('form:serviceTime')}
                name="service-time"
                component={InputTime}
            />
            {
                servicelocation == 'service-home' && technicians == 'technician-appoint' &&
                <Field
                    label={t('form:staffCode')}
                    name="staff-code"
                    component={InputField}
                    placeholder={t('form:staffCodePlaceholder')}
                />
            }
            <FormSubmitBtn icon={'arrow-forward'}/>
        </View>
    );
};


export default BookServiceForm;

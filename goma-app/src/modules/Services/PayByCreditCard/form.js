import React, { Component, useState } from 'react';
import { View } from 'react-native';
import InputFieldCard from '../../../components/common/Input/InputFieldCard/index';
import InputMaskCard from '../../../components/common/Input/InputMaskCard';
import FormSubmitBtn from '../../../components/common/Input/Button/FormSubmitBtn';
import { Field } from 'redux-form';
import styles from './style';
import { useTranslation } from 'react-i18next';


const CreditCardForm = () => {

    // LANGUAGE
    const {t} = useTranslation();

    return (
        <View style={styles.formWrap}>
            <View style={styles.formField}>
                <View style={styles.formRow}>
                    <Field
                        name="card-number"
                        component={InputFieldCard}
                        placeholder={t('service:cardNumber')}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.formRow}>
                    <Field
                        name="card-name"
                        component={InputFieldCard}
                        placeholder={t('service:cardName')}
                    />
                </View>
                <View style={styles.formColumn}>
                    <View style={styles.formColumnLeft}>
                        <Field
                            name="card-name"
                            component={InputMaskCard}
                            placeholder={t('service:cardExpirationDate')+' (mm/yyyy)'}
                            mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formColumnRight}>
                        <Field
                            name="card-cvv"
                            component={InputFieldCard}
                            placeholder={t('service:cardCvv')}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.formButton}>
                <FormSubmitBtn label="Xác nhận"/>
            </View>
        </View>
    );
};


export default CreditCardForm;

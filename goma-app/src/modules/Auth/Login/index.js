import { View, Text } from 'react-native';
import React from 'react';
import styles from './style';
import { useTranslation } from 'react-i18next';


const Login = () => {
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Text style={ styles.test }>{t('common:hello')}</Text>
    </View>
  )
}

export default reduxForm({
  form: 'Login', // a unique identifier for this form
  enableReinitialize: true,
})(Login);
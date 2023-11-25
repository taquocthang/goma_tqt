import { View,Text } from 'native-base';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AuthNavigator } from './navigation/AuthNavigation';
import { MainNavigator } from './navigation/MainNavigator';
function Navigator() {
    const {t, i18n} = useTranslation();
    return <MainNavigator />
    // <AuthNavigator />
    
}

export default Navigator;
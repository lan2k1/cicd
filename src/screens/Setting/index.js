import { app, auth } from '@actions';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { LanguageButton } from '@components';

const index = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const _logout = () => {
    dispatch(auth.logout());
  };

  return (
    <View style={styles.container}>
      <Text>
        {t('content:changelanguage')} ({i18n.language})
      </Text>

      <LanguageButton />
      <TouchableOpacity onPress={_logout} style={styles.btn}>
        <Text>{t('screen:logout')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

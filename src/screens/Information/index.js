import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Header } from './widget';
import { useTranslation } from 'react-i18next';

const index = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('screen:information')}</Text>
    </View>
  );
};

export default index;

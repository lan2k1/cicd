import { Text } from '@components';
import { scaleWidth } from '@utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { LanguageButton } from '@components';

const Header = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {/* <LanguageButton /> */}
      <Text fontFamily="merge">{t('error:0')}</Text>
      <LanguageButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleWidth(4),
    justifyContent: 'space-between'
  },
});

export default Header;

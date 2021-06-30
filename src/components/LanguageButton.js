import { app } from '@actions';
import { RESOURCES } from '@config';
import { scaleWidth } from '@utils';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const LanguageButton = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const { lang } = useSelector((state) => state.app);

  const toggleSwitch = () => {
    dispatch(app.switchLanguage(i18n.language === 'en' ? 'vi' : 'en'));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={toggleSwitch}>
      {lang === 'vi' ? (
        <>
          <Text style={styles.txt}>VI</Text>
          <Image source={RESOURCES.icons.vi} style={styles.flag} />
        </>
      ) : (
        <>
          <Image source={RESOURCES.icons.en} style={styles.flag} />
          <Text style={styles.txt}>EN</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default LanguageButton;

const styles = StyleSheet.create({
  container: {
    width: scaleWidth(12),
    height: scaleWidth(6.25),
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: scaleWidth(4),

    padding: scaleWidth(1),
    borderWidth: 0.5,
    borderColor: '#D2D2D2'
  },
  flag: {
    width: scaleWidth(5),
    height: scaleWidth(4),
    borderRadius: scaleWidth(4),
  },
  txt: {
    width: scaleWidth(5),
    height: scaleWidth(4),
    fontSize: scaleWidth(3),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

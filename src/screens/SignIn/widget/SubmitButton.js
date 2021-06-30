import { Text } from '@components';
import { scaleHeight, scaleWidth } from '@utils';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';

const SubmitButton = ({ onPress = () => {}, isActive = false }) => {
  const { t } = useTranslation();
  return isActive ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#00FFFF', '#12AAEF', '#254DDE']}
      style={styles.button(isActive)}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.center}>
        <Text fontFamily="merge" style={styles.txt(isActive)}>
          {t('signin:login')}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <View style={styles.button(isActive)}>
      <Text fontFamily="merge" style={styles.txt(isActive)}>
        {t('signin:login')}
      </Text>
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: (isActive) => {
    return {
      backgroundColor: isActive ? '#1366AE' : 'transparent',
      width: '100%',
      marginTop: scaleHeight(5),
      borderRadius: 5,
      height: scaleWidth(12),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: isActive ? 0 : 1,
      borderColor: '#12AAEF',
    };
  },
  txt: (isActive) => {
    return {
      fontSize: scaleWidth(4.5),
      color: isActive ? 'white' : '#12AAEF',
    };
  },
  center: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast, { BaseToast } from 'react-native-toast-message';

const ToastProvider = () => {
  const toastConfig = {
    error: ({ title, message, props, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: '#FE2E2E' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
        text1={title}
        text2={message}
      />
    ),
    customError: ({ title, message, props, ...rest }) => (
      <BaseToast
        {...rest}
        style={{ borderLeftColor: '#FE2E2E' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
        text1={title}
        text2={message}
      />
    ),
  };

  return <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />;
};

export default ToastProvider;

const customError = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

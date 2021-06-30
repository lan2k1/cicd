import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Header } from './widget';

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>SignUp</Text>
    </View>
  );
};

export default index;

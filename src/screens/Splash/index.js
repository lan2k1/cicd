import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import {RESOURCES} from '@config';
import {app} from '@actions';
import styles from './style';

const index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const loadingApp = () => {
      delay(2000);
      const action = app.startUp();
      dispatch(action);
    };
    loadingApp();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default index;

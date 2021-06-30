import { app } from '@actions';
import React, { useEffect } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { useDispatch, useSelector } from 'react-redux';

const LoadingRoot = () => {
  const dispatch = useDispatch();
  const { isLoadingRoot } = useSelector((state) => state.loading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(app.stopLoading());
    }, 5000);
  }, [isLoadingRoot]);

  return (
    <Modal visible={isLoadingRoot} transparent>
      <View style={styles.container}>
        <Spinner
          isVisible={true}
          size={30}
          type={'WanderingCubes'}
          color={'#0AC4BA'}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export default LoadingRoot;

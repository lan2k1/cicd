import React from 'react';
import { Modalize } from 'react-native-modalize';

const Modal = ({ close, children, refModal }) => {
  return (
    <Modalize
      handleStyle={{
        opacity: 1,
      }}
      overlayStyle={{
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
      modalStyle={{
        backgroundColor: 'transparent',
      }}
      dialogStyle={{ position: 'absolute', bottom: 0 }}
      adjustToContentHeight
      onBackButtonPress={close}
      ref={refModal}>
      {children}
    </Modalize>
  );
};

export default Modal;

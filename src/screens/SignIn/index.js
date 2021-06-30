import { auth } from '@actions';
import { Formik } from 'formik';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import styles from './styles';
import { Header, Input, SubmitButton } from './widget';
import { DatePickerCustom, Modalize } from '@components';

const index = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [date, setDate] = React.useState(new Date())

  const onLogin = (email, password) => {
    console.log(email, password);
    dispatch(auth.login());
  };

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = (value) => {
    modalizeRef.current?.close();
    console.log(value)
    setDate(value)
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => onLogin(values.email, values.password)}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        handleSubmit,
        setFieldTouched,
      }) => (
        <View style={styles.container}>
          <Header />
          <TouchableOpacity
            onPress={onOpen}
            style={{ width: 100, height: 100, backgroundColor: 'red' }}>
            <Text>btn</Text>
          </TouchableOpacity>
          {/* <View style={styles.form}>
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={t('signin:email')}
              onBlur={() => setFieldTouched('email')}
              error={errors.email}
              touched={touched.email}
            />
            <Input
              isPassword={true}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder={t('signin:password')}
              onBlur={() => setFieldTouched('password')}
              error={errors.password}
              touched={touched.password}
            />
          </View> */}
          {/* <SubmitButton
            isActive={values.email.length !== 0 && values.password.length !== 0}
            onPress={handleSubmit}
          /> */}
          <Modalize refModal={modalizeRef}>
            <DatePickerCustom currentDate={date} close={onClose} />
          </Modalize>
        </View>
      )}
    </Formik>
  );
};

export default index;

import { scaleWidth } from '@utils';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DatePicker } from 'react-native-wheel-pick';
import { useDispatch } from 'react-redux';
import Text from './Text';
import moment from 'moment';

const EN_MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const VI_MONTH = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const DatePickerCustom = ({currentDate = new Date(), close = () => {}}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isIos = Platform.OS === 'ios';

  const [selectDate, setSelectDate] = React.useState(currentDate);

  const onSelect = (value) => {
    setSelectDate(value)
    // const isChange = moment(value).format('DD/MM/YYYY') === moment(date).format('DD/MM/YYYY')
    // console.log(isChange)
    // if(!isChange){
    //   console.log(moment(value).toDate());
    //   setDate(moment(value).toDate());
    // }
    // setDate(date);
    // console.log(moment(value).format('DD/MM/YYYY') === moment(date).format('DD/MM/YYYY'))
    // console.log(moment(date).format('DD/MM/YYYY'))
    
  };

  const setDate = () => {
    close(selectDate)
  }

  // console.log(typeof new Date())
  return (
    <View style={styles.container}>
      <Header date={selectDate} />
      <DatePicker
        style={{
          backgroundColor: 'transparent',
          width: isIos ? scaleWidth(90) : undefined,
        }}
        textSize={scaleWidth(5)}
        mode={'date'}
        order={i18n.language === 'en' ? 'M-D-Y' : 'D-M-Y'}
        labelUnit={{
          year: '',
          month: i18n.language === 'en' ? EN_MONTH : VI_MONTH,
          date: '',
        }}
        date={currentDate}
        onDateChange={onSelect}
      />
      <Button isActive={true} onPress={setDate} />
      <Button isActive={false} onPress={setDate} />
    </View>
  );
};

const Header = ({ date }) => {
  const { i18n } = useTranslation();
  return (
    <View style={styles.header}>
      <Text fontFamily="merge" style={styles.txt(true)}>
        {i18n.language === 'en'
          ? moment(date).format('MMMM D, YYYY')
          : moment(date).format('DD/MM/YYYY')}
      </Text>
    </View>
  );
};

const Button = ({ onPress = () => {}, isActive = true }) => {
  const { t } = useTranslation();
  return isActive ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#8DD888', '#7DCE91', '#68C19C']}
      style={styles.button(isActive)}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.center}>
        <Text fontFamily="merge" style={styles.txt(isActive)}>
          {t('content:setdate')}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.button(isActive)}>
      <Text fontFamily="merge" style={styles.txt(isActive)}>
        {t('content:cancel')}
      </Text>
    </TouchableOpacity>
  );
};

export default DatePickerCustom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',

    borderTopLeftRadius: scaleWidth(5),
    borderTopRightRadius: scaleWidth(5),
  },
  button: (isActive) => {
    return {
      backgroundColor: isActive ? '#1366AE' : 'transparent',
      width: '90%',
      marginBottom: scaleWidth(4),
      borderRadius: 5,
      height: scaleWidth(12),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: isActive ? 0 : 1,
      borderColor: '#68C19C',
    };
  },
  txt: (isActive) => {
    return {
      fontSize: scaleWidth(4.5),
      color: isActive ? 'white' : '#68C19C',
    };
  },
  header: {
    width: '100%',
    backgroundColor: '#68C19C',
    paddingVertical: scaleWidth(2.5),
    alignItems: 'center',
    borderTopLeftRadius: scaleWidth(5),
    borderTopRightRadius: scaleWidth(5),
  },
  center: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

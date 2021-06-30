import { Text } from '@components';
import { COLORS, RESOURCES } from '@config';
import { scaleWidth } from '@utils';
import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Input = ({
  onPress = () => {},
  value = '',
  onChangeText = () => {},
  placeholder = '',
  onBlur = () => {},
  error,
  touched,
  isPassword,
}) => {
  const [isSecure, setSecure] = React.useState(true);

  const toggleSwitch = () => {
    setSecure((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input(isPassword)}
          placeholderTextColor={COLORS.silver}
          onBlur={onBlur}
          placeholder={placeholder}
          secureTextEntry={(isPassword && isSecure) || false}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleSwitch}>
            <Image
              source={isSecure ? RESOURCES.icons.eyeOn : RESOURCES.icons.eyeOff}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <BorderBottom />
      {touched && error ? (
        <Text fontFamily="medium" style={styles.errorTxt}>
          {error}
        </Text>
      ) : (
        <Text style={styles.errorTxt} />
      )}
    </View>
  );
};

const BorderBottom = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#00FFFF', '#12AAEF', '#254DDE']}
      style={styles.line}></LinearGradient>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: scaleWidth(4),
  },
  line: {
    width: '100%',
    height: scaleWidth(0.4),
  },
  input: (isPassword) => {
    return {
      width: isPassword ? '92.5%' : '100%',
      fontSize: scaleWidth(4),
      color: COLORS.silver,
      padding: 0,
    };
  },
  errorTxt: {
    fontSize: scaleWidth(2.5),
    color: COLORS.red,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyeIcon: {
    width: scaleWidth(3),
    height: scaleWidth(3),
    padding: scaleWidth(2.5),
  },
});

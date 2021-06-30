import { StyleSheet } from 'react-native';
import { scaleWidth, scaleHeight } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: '#BBB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    position: 'absolute',
    bottom: 50
  }
});

export default styles;

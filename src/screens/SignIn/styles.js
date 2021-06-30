import { StyleSheet } from 'react-native';
import { scaleWidth, scaleHeight } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: scaleWidth(3),

    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginHorizontal: scaleWidth(1),
    padding: scaleWidth(5),
    marginTop: scaleWidth(15),
    backgroundColor: '#FFF',
    borderRadius: scaleWidth(4),

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const inputStyles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    padding: 20,
    borderRadius: 5,
    fontSize: 15,
    flex: 1,
  },
  addCircle: {
    color: colors.bgButton,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default inputStyles;

import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const inputStyles = StyleSheet.create({
  inputContainer: {
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
    backgroundColor: colors.bgBox,
    padding: 20,
    borderRadius: 50,
    fontSize: 15,
    flex: 1,
  },
  textInput: {
    color: colors.textSecondary,
  },
  addCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default inputStyles;

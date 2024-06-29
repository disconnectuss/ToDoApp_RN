import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const planStyles = StyleSheet.create({
  planContainer: {
    padding: 20,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgColor
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    fontsize: 30,
  },
  date: {
    marginTop: 10,
    color: colors.textSecondary,
    fontsize: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  check:{
    color:'gray'
  },
  checkDone:{
    color:'red',
    textDecorationLine:'line-through'
  }
});

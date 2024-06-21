import {StyleSheet} from 'react-native';
import { colors } from './constants';
export const generalStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.bgColor
  },
  plansWrapper: {
    flex: 1,
    borderWidth:1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
    color: colors.textSecondary
  },
});

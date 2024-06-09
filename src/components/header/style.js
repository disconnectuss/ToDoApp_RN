import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styleHeader = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    height: 50,
    backgroundColor: colors.bgHeader,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    allignItems: 'center',
    padding:10,
   
  },
  title: {
    fontWeight: 'bold',
    fontSize:25,
    color: colors.textColor,
  },
});

export default styleHeader;

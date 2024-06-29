import { StyleSheet } from 'react-native';
import {colors} from '../../utils/constants';
 
export const modalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bgModal,
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5,
      flexDirection:'column',
      alignContent: 'center',
    },
    title: {
      color: colors.textThird,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
  });
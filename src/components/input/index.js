import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import inputStyles from '../input/style';
import {AddCircle} from '../icons';

const InputCard = ({
  placeholder = 'what are you planning to do?',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  addFunc = () => {},
  value = '',
  onChangeText = () =>{},
}) => {

  return (
    <View style={inputStyles.inputWrapper}>
      <TextInput
        style={inputStyles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
       ></TextInput>
      {hasIcon && (
        <TouchableOpacity onPress={addFunc}>
          <AddCircle style={inputStyles.addCircle} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputCard;

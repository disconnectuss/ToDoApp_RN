import {Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {modalStyles} from './style';
import InputCard from '../input'


const EditModal = ({visible, closeModal}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.title}>Edit Plan</Text>
          <InputCard />

          <TouchableOpacity onPress={closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;

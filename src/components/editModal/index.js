import {Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {modalStyles} from './style';
import InputCard from '../input';

const EditModal = ({
  visible,
  closeModal,
  editPlan,
  setEditPlan,
  saveEditPlan,
  hasError,
  errorMessage,
}) => {
  const handleSave = () => {
    saveEditPlan(editPlan);
  };
  return (
    <Modal visible={visible} transparent>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.title}>Edit Plan</Text>
          <InputCard
            value={editPlan}
            onChangeText={text => setEditPlan(text)}
            editPlan={editPlan}
            setEditPlan={setEditPlan}
          />
          {hasError && (
            <Text style={modalStyles.validationText}>{errorMessage}</Text>
          )}
          <TouchableOpacity onPress={handleSave}>
            <Text style={modalStyles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;

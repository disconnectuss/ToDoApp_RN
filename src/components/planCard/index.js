import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {planStyles} from './style';
import {Check, Edit, Cancel} from '../icons';
import EditModal from '../editModal';

const PlanCard = ({plan = {}, plans = [], setPlans = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [editPlan, setEditPlan] = useState(plan.text);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const deletePlan = () => {
    Alert.alert('Delete', 'Sure to delete this plan?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const filterPlans = plans.filter(item => item.id !== plan.id);
          setPlans(filterPlans);
        },
        style: 'destructive',
      },
    ]);
  };

  const checkDone = () => {
    const temptArr = [];
    for (let i = 0; i < plans.length; i++) {
      if (plans[i].id !== plan.id) {
        temptArr.push(plans[i]);
      } else {
        const newPlan = {
          ...plan,
          isDone: !plan.isDone,
        };
        temptArr.push(newPlan);
      }
      setPlans(temptArr);
    }
    console.log(temptArr);
  };

  const saveEditPlan = newText => {
    if (newText.trim() === '') {
      setHasError(true);
      setErrorMessage('* Do not leave empty!');
    } else {
      const updatedPlans = plans.map(item =>
        item.id === plan.id ? {...plan, text: newText} : item,
      );
      setPlans(updatedPlans);
      setOpenModal(false);
      setHasError(false);
      setErrorMessage('');
    }
  };

  return (
    <View style={planStyles.planContainer}>
      <View style={planStyles.textContainer}>
        <Text style={[planStyles.title, plan?.isDone && planStyles.checkDone]}>
          {plan?.text}
        </Text>
        <Text style={planStyles.date}>
          {new Date(plan?.date).toLocaleDateString('en-EN')}
        </Text>
      </View>

      <View style={planStyles.iconContainer}>
        <TouchableOpacity onPress={checkDone}>
          <Check color={plan.isDone ? 'green' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Edit />
        </TouchableOpacity>
        <TouchableOpacity onPress={deletePlan}>
          <Cancel />
        </TouchableOpacity>
      </View>
      <EditModal
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        editPlan={editPlan}
        setEditPlan={setEditPlan}
        saveEditPlan={saveEditPlan}
        hasError={hasError}
        errorMessage={errorMessage}
      />
    </View>
  );
};

export default PlanCard;

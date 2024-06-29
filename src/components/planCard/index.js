import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {planStyles} from './style';
import {Check, Edit, Cancel} from '../icons';
import EditModal from '../editModal';

const PlanCard = ({plan = {}, plans = [], setPlans = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [EditPlan, setEditPlan] = useState(plan.text);
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
      <EditModal visible={openModal} closeModal={() => setOpenModal(false)} />
    </View>
  );
};

export default PlanCard;

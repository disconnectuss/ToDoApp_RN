import {View, Text, Touchable, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {planStyles} from './style';
import {Check, Edit, Cancel} from '../icons';

const PlanCard = ({plan = {}, plans = [], setPlans = () => {}}) => {
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
  };
  return (
    <View style={planStyles.planContainer}>
      <View style={planStyles.textContainer}>
        <Text style={planStyles.title}>{plan?.text}</Text>
        <Text style={planStyles.date}>
          {new Date(plan?.date).toLocaleDateString('en-EN')}
        </Text>
      </View>

      <View style={planStyles.iconContainer}>
        <TouchableOpacity onPress={checkDone}>
          <Check />
        </TouchableOpacity>
        <TouchableOpacity>
          <Edit />
        </TouchableOpacity>
        <TouchableOpacity onPress={deletePlan}>
          <Cancel />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanCard;

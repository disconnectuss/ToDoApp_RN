import { View, Text } from 'react-native';
import React from 'react';
import { planStyles } from './style';
import { Check, Edit, Cancel } from '../icons'




const PlanCard = ({ plans  }) => {
  return (
    <View style={planStyles.planContainer}>
      <View style={planStyles.textContainer} >
              <Text style={planStyles.title}>{plans?.text}</Text>
      <Text style={planStyles.date}>{new Date(plans?.date).toLocaleDateString("en-EN")}</Text>
      </View>

      <View style={planStyles.iconContainer}>
        <Check/>
        <Edit/>
        <Cancel/>
      </View>
    </View>
  );
};

export default PlanCard;


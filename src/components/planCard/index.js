import { View, Text } from 'react-native';
import React from 'react';
import { planStyles } from './style';


const PlanCard = ({ plans  }) => {
  return (
    <View style={planStyles.planWrapper}>
      <Text>{plans?.text}</Text>
      <Text></Text>
    </View>
  );
};

export default PlanCard;


import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from './src/components/header';
import {generalStyles} from './src/utils/generalStyles';
import InputCard from './src/components/input';
import {useState} from 'react';
import PlanCard from './src/components/planCard';

function App() {
  const [text, setText] = useState('');
  const [plans, setPlans] = useState([]);
  // console.log(plans.text)
  const addPlan = () => {
    const newPlan = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      isDone: false,
    };
    setPlans([...plans, newPlan]);
    setText('');

  };
  return (
    <SafeAreaView style={generalStyles.body}>
      <Header title={'Goofy Planner'} />
      <InputCard
        value={text}
        onChangeText={text => setText(text)}
        placeholder="what are you planning to do?"
        hasIcon
        addFunc={addPlan}
      />
      <View style={generalStyles.plansWrapper}>
        {plans.length === 0 ? (
          <Text style={generalStyles.emptyText}>
            You haven't planned anything yet!
          </Text>
        ) : (
          <ScrollView>
            {plans?.map(plan => (
              <PlanCard key={plan.id} plans={plan} />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;

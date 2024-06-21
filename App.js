import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from './src/components/header';
import {generalStyles} from './src/utils/generalStyles';
import InputCard from './src/components/input';
import {useState} from 'react';
function App() {
  const [text, setText] = useState('');
  const [plans, setPlans] = useState([]);
  const addPlan = () => {
    const newPlan = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      isDone: false,
    }
    setPlans([...plans, newPlan])
  };
  return (
    <SafeAreaView style={generalStyles.body}>
      <Header title={'Daily Planner'} />
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
            <Text>new plan</Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;

import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from './src/components/header';
import {generalStyles} from './src/utils/generalStyles';
import InputCard from './src/components/input';
import {useState} from 'react';
import PlanCard from './src/components/planCard';
import SwitchSelector from 'react-native-switch-selector';
import {colors} from './src/utils/constants';
import { Agenda, CalendarList } from 'react-native-calendars';
import CalendarView from './src/components/calender';

function App() {
  const [text, setText] = useState('');
  const [plans, setPlans] = useState([]);
  const [selectedView, setSelectedView] = useState('p'); 

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

  const options = [
    {label: 'Plans', value: 'p'},
    {label: 'Calendar', value: 'c'},
  ];

  return (
    <SafeAreaView style={generalStyles.body}>
      <Header title={'Goofy Agenda'} />
      <SwitchSelector
        style={generalStyles.switchSelector}
        initial={0}
        onPress={value => setSelectedView(value)} 
        textColor={colors.textPrimary}
        selectedColor={colors.white}
        hasPadding={false}
        buttonColor={'#7a44cf'}
        backgroundColor={colors.bgColor}
        options={options}
        testID="switch-selector"
        borderRadius={10}
        fontSize={20}
        buttonMargin={5}
        height={60}
      />

      {selectedView === 'p' ? (
        <>
          <InputCard
            value={text}
            onChangeText={text => setText(text)}
            placeholder="What are you planning to do?"
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
                {plans.map(plan => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    plans={plans}
                    setPlans={setPlans}
                  />
                ))}
              </ScrollView>
            )}
          </View>
        </>
      ) : (
        <CalendarView/>
      )}
    </SafeAreaView>
  );
}

export default App;

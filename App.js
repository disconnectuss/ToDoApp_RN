import {SafeAreaView} from 'react-native';
import Header from './src/components/header';
import {generalStyles} from './src/utils/generalStyles';
import InputCard from './src/components/input';
function App() {
  return (
    <SafeAreaView style={generalStyles.body}>
      <Header title={'Daily Planner'} />
      <InputCard />
    </SafeAreaView>
  );
}

export default App;

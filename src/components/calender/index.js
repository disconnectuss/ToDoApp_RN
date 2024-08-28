import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';
import InputCard from '../input';

const MyAgenda = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [items, setItems] = useState({
    '2024-08-28': [{ name: 'Current date agenda item' }],
    '2024-08-29': [{ name: 'Another item' }],
    '2024-08-30': [],
    '2024-09-01': [{ name: 'September item' }]
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleDayPress = (day) => {
    setSelectedDay(day.dateString);
    setModalVisible(true);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItems = { ...items };
      if (newItems[selectedDay]) {
        newItems[selectedDay].push({ name: inputValue });
      } else {
        newItems[selectedDay] = [{ name: inputValue }];
      }
      setItems(newItems);
      setInputValue('');
      setModalVisible(false);
  
      // Show success alert
      Alert.alert('Success', 'Item successfully saved!');
    } else {
      // Show input error alert
      Alert.alert('Input Error', 'Please enter a valid item.');
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        onDayPress={handleDayPress}
        selected={currentDate}
        minDate={currentDate}
        maxDate={'2024-12-31'}
        renderItem={(item) => (
          <View style={{ marginVertical: 10, padding: 20, backgroundColor: 'lightgrey' }}>
            <Text>{item.name}</Text>
          </View>
        )}
        renderEmptyDate={() => (
          <View style={{ marginVertical: 10, padding: 20, backgroundColor: 'lightyellow' }}>
            <Text>No items for this date</Text>
          </View>
        )}
        theme={{
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue'
        }}
        hideKnob={true}
        markedDates={{
          [currentDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />

      {/* Input Modal */}
      <Modal
   animationType="slide"
   transparent={true}
   visible={modalVisible}
   onRequestClose={() => setModalVisible(false)}
 >
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
     <View style={{ width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
       <InputCard
         value={inputValue}
         onChangeText={setInputValue}
         hasIcon={true}
         addFunc={handleAddItem}
       />
       
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
         <TouchableOpacity onPress={handleAddItem}>
           <Text style={{ color: 'green' }}>Save</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => setModalVisible(false)}>
           <Text style={{ color: 'red' }}>Cancel</Text>
         </TouchableOpacity>
       </View>
     </View>
   </View>
      </Modal>
    </View>
  );
};

export default MyAgenda;

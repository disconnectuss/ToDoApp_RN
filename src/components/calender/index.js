import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Modal } from 'react-native';
import { Agenda } from 'react-native-calendars';
import SvgButton from '../icons/Button';

// Class Imports

export default function CalendarView() {

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(!isModalVisible);

    return (
        <View style={styles.container}>
            <Agenda
                style={styles.calendarWrapper}
                scrollEnabled={true}
                theme={{
                    // calendarBackground: '#000000'
                    todayTextColor: '#00adf5',
                }}
            >
            </Agenda>

            <View style={styles.absolute} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SvgButton onPress={handleModal} />
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={isModalVisible}
                    onRequestClose={handleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.text}>Placeholder Text</Text>
                            <TouchableOpacity onPress={handleModal} style={styles.button}>
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        bottom: 80,
        right: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    calendarWrapper: {},
    items: {},
    dayPressColor: {
        backgroundColor: '#000000'
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#00adf5',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})

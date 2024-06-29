import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'

const EditModal = () => {
  return (
    <View>
      <Modal visible={visible} transparent >
        <Text>EditModal</Text>
        <TouchableOpacity onPress={closeModal}>
            <Text>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default EditModal

const styles = StyleSheet.create({})
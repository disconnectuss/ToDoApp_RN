import { View, Text } from 'react-native'
import React from 'react'
import  styleHeader  from '../header/style'
import { NoteIcon } from '../icons'

const Header = ({title=""}) => {
  return (
    <View style={styleHeader.headerWrapper}>
      <Text style={styleHeader.title}>{title}</Text>
      <NoteIcon/>
    </View>
  )
}

export default Header
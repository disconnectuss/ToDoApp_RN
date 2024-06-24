import { View, Text } from 'react-native'
import React from 'react'
import  styleHeader  from '../header/style'
import { NoteIcon, BackIcon, HeaderIcon } from '../icons'

const Header = ({title=""}) => {
  return (
    <View style={styleHeader.headerWrapper}>
      <BackIcon/>
      <Text style={styleHeader.title}>{title}</Text>
      <HeaderIcon/>
    </View>
  )
}

export default Header
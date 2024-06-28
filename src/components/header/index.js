import { View, Text } from 'react-native'
import React from 'react'
import  styleHeader  from '../header/style'
import { BackIcon, AvatarIcon } from '../icons'

const Header = ({title=""}) => {
  return (
    <View style={styleHeader.headerWrapper}>
      <BackIcon/>
      <Text style={styleHeader.title}>{title}</Text>
      <AvatarIcon/>
    </View>
  )
}

export default Header
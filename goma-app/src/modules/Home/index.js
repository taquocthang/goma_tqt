import { View, Text, Button } from 'react-native'
import React from 'react'
import config from '../../config'

const HomeContainer = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontFamily: config.fonts.Regular }}>HomeContainer</Text>
    </View>
  )
}

export default HomeContainer
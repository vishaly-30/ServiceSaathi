import { View, Text } from 'react-native'
import React from 'react'

const App = () => {

  const hello =()=> {
    return `Hiiii there`;
  }

  return (
    <View>
      <Text>Hi there! created new APP :) {hello()}</Text>
    </View>
  )
}

export default App
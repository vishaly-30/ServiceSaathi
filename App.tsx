import { View, Text } from 'react-native'
import React from 'react'

const App = () => {

  const hello =()=> {
    console.log("Starting the application"); 
    let data = 'Hello';
    return data;
  }

  return (
    <View>
      <Text>Hi there! created new APP :)</Text>
    </View>
  )
}

export default App
import { View, Text } from 'react-native'
import React from 'react'

const App = () => {

  const hello =()=> {
    let data = 'Hello';
    console.log("Starting the application", data); 
    return data;
  }

  return (
    <View>
      <Text>Hi there! created new APP :)</Text>
    </View>
  )
}

export default App
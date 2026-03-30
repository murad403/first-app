import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const State = () => {
    const [name, setName] = useState('Murad');
  return (
    <View>
        <Text style={{ fontSize: 20, color: "red" }}>{name}</Text>
        <Button title='Add New Name' onPress={() => setName('John')}/>
    </View>
  )
}

export default State

import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import UserData from './components/UserData';
import State from './components/State';
import Input from './components/Input';


const App = () => {
  const AddItem = () =>{
    Alert.alert("Item Added", "A new item has been added.");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello</Text>
      <Text style={styles.title}>I am Murad</Text>
      <Text style={styles.description}>This is my first React Native app</Text>


      <Button title="Press me" accessibilityLabel='item add' color={"blue"} onPress={AddItem}/>

      <UserData/>


      {/* state */}
      <State/>

      {/* input field */}
      <Input/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000000",
    minHeight: "100%"
  },
  heading: {
    fontSize: 35,
    color: "#fff",
    fontWeight: '700',
  },
  title: {
    fontSize: 20,
    color: "powderblue",
    fontWeight: '500'
  },
  description: {
    fontSize: 16,
    color: "#fff923"
  },
})

export default App;

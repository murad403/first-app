import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native";


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello</Text>
      <Text style={styles.title}>I am Murad</Text>
      <Text style={styles.description}>This is my first React Native app</Text>
      <Button title="Press me" />
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

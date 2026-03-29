import React from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text } from "react-native";
import UserData from './components/UserData';
import State from './components/State';
import Input from './components/Input';
import Form from './components/Form';
import FlateList from './components/FlateList';
import Grid from './components/Grid';
import SectionListComponent from './components/SectionList';


const App = () => {
  const AddItem = () =>{
    Alert.alert("Item Added", "A new item has been added.");
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Hello</Text>
      <Text style={styles.title}>I am Murad</Text>
      <Text style={styles.description}>This is my first React Native app</Text>


      <Button title="Press me" accessibilityLabel='item add' color={"blue"} onPress={AddItem}/>

      <UserData/>


      {/* state */}
      {/* <State/> */}

      {/* input field */}
      {/* <Input/> */}

      {/* form */}
      {/* <Form/> */}

      {/* flat list */}
      {/* <FlateList/> */}

      {/* grid list */}
      {/* <Grid/> */}

      {/* section list */}
      <SectionListComponent/>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 32,
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

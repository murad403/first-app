import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'

const SectionListComponent = () => {

    const Data = [
        {
            id: 1, 
            name: "Murad", 
            data: ["JavaScript", "React Native"]},
        {
            id: 3, 
            name: "Nice", 
            data: ["JavaScript", "React Native"]
        },
        {
            id: 2, 
            name: "Model", 
            data: ["JavaScript", "React Native", "TypeScript"]
        }
    ]

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Section List</Text>

      <SectionList
        sections={Data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text style={styles.skill}>{item}</Text> }
        renderSectionHeader={({section}) => <Text style={styles.title}>{section.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 10,
        backgroundColor: "lightgray"
    },
    heading: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },
    skill: {
        fontSize: 16,
        color: "black"
    },
    title: {
        fontSize: 20,
        color: "red",
        fontWeight: "semibold"
    }
})

export default SectionListComponent

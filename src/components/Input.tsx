import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'



const Input = () => {
  return (
    <View>
        <TextInput style={styles.inputBox} placeholder="Enter text here..." placeholderTextColor={"white"} />
        <TouchableOpacity style={styles.button}>
            
            <Text>Add Name</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        color: "white"
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 5,
        margin: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    }
})

export default Input

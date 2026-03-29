import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Grid = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.item}>Murad1</Text>
        <Text style={styles.item}>Murad1</Text>
        <Text style={styles.item}>Murad1</Text>
        <Text style={styles.item}>Murad1</Text>
        <Text style={styles.item}>Murad1</Text>
        <Text style={styles.item}>Murad1</Text>
        <Text style={styles.item}>Murad1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    item: {
        backgroundColor: "blue",
        padding: 30,
        margin: 5,
        color: "white"
    }
})

export default Grid

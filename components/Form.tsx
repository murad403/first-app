import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Form = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [display, setDisplay] = React.useState(false);
    const ResetDetails = () => {
        setDisplay(false);
        setName("");
        setEmail("");
        setPassword("");
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Input Form Design And Implementation</Text>
            <View style={{ marginTop: 20 }}>
                <TextInput value={name} onChangeText={(text) => setName(text)} style={styles.input} placeholder='Enter your name' />
                <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='Enter your email' />
                <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={styles.input} placeholder='Enter your password' />
                <Button title='Submit Details' onPress={() => setDisplay(true)} />
                <Button title='Reset Details' color={"red"} onPress={ResetDetails} />
            </View>
            <View>
                {
                    display ?
                        <View style={styles.detailsBox}>
                            <Text style={{ fontSize: 16, color: "black" }}>User Name: {name}</Text>
                            <Text style={{ fontSize: 16, color: "black" }}>User Email: {email}</Text>
                            <Text style={{ fontSize: 16, color: "black" }}>User Password: {password}</Text>
                        </View> :
                        null
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        color: "yellow"
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "blue",
        marginBottom: 5
    },
    detailsBox: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5
    }
})

export default Form

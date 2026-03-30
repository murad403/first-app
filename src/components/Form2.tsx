import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type TFormData = {
    email: string;
    password: string;
}

const Form2 = () => {
    const { control, handleSubmit } = useForm<TFormData>();
    const onSubmit = (data: TFormData) => {
        console.warn(data);
    };
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name='email'
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your email'
                        placeholderTextColor={"#fff"}
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            <Controller
                control={control}
                name='password'
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your password'
                        placeholderTextColor={"#fff"}
                        secureTextEntry={true}
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "red",
        padding: 14,
        color: "white",
        borderRadius: 5
    },
    button: {
        backgroundColor: "green",
        color: "white",
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    }
})

export default Form2

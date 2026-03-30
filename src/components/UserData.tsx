import React from "react";
import { Button, Text, View } from "react-native";
import { TextMarginTop, TextStyle } from "../styles/text.style";


const UserData = () =>{
    const AddUserData =(userId: string) =>{
        console.warn(`User added with ID: ${userId}`)
    }
  return (
    <View>
      <Text style={{ fontSize: 33, color: "#fff", borderWidth: 1, borderColor: "#fff",  borderRadius: 10, marginTop: 10, paddingHorizontal: 20 }}>Name: Murad</Text>
      <Text style={[TextStyle.text, TextMarginTop.text]}>Age: 22</Text>
      <Button title="Add User" onPress={() => AddUserData("2")}/>
    </View>
  )
}

export default UserData;

import React from 'react'
import { FlatList, Text, View } from 'react-native'

const FlateList = () => {
    const users = [
        { id: "1", name: "Alice Johnson", email: "alice.johnson@example.com" },
        { id: "2", name: "Brian Smith", email: "brian.smith@example.com" },
        { id: "3", name: "Catherine Lee", email: "catherine.lee@example.com" },
        { id: "4", name: "David Brown", email: "david.brown@example.com" },
        { id: "5", name: "Emma Davis", email: "emma.davis@example.com" },
        { id: "6", name: "Frank Wilson", email: "frank.wilson@example.com" },
        { id: "7", name: "Grace Miller", email: "grace.miller@example.com" },
        { id: "8", name: "Henry Taylor", email: "henry.taylor@example.com" },
        { id: "9", name: "Isabella Moore", email: "isabella.moore@example.com" },
        { id: "10", name: "Jack Anderson", email: "jack.anderson@example.com" }
    ];

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={users}
                renderItem={({item}) => <Text style={{ fontSize: 18, margin: 10, color: "#fff" }}>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default FlateList

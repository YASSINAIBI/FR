import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useHistory} from 'react-router-native'
import Button from '../shared/Button'

export default function Login() {
    const history = useHistory()
    return (
        <View>
            <Text>Login</Text>
            <Button title='reservation' onPress={() => {
                history.push("/reservation");
            }} />
        </View>
    )
}
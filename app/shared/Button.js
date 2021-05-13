import React from 'react'
import {TouchableOpacity,Text} from 'react-native';
import {styles} from '../style/styles'


export default function Button(props) {
    const {onPress,title} = props 
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.btn}>{title}</Text>
        </TouchableOpacity>
    )
}

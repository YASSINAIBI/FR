import React from 'react'
import { ImageBackground, Text, View,Image } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'
const Background = require('../../assets/Bg.jpg')
const Best = require('../../assets/antom.svg')
const Logo = require('../../assets/EqdomLogo.png')

export default function Home() {
    const history = useHistory()
    return (
        <ImageBackground 
        source={Background}
        style={styles.imageBackground}
        >
            
            <View style={styles.conta}>
                
                <Text  style={{color:"white",
                fontSize:44,
                fontWeight:'bold',
                marginTop:-10,
                marginRight:10,
                textAlign:'center'
                
}}> 
                </Text>
            </View>
            <View style={styles.header}>
                
                <Image 
                style={styles.logo}
                source={Logo} />
                <Button title='Faire une simulation' onPress={() => {
                history.push("/credit");
            }} />
            </View>
            
        </ImageBackground>
    )
}


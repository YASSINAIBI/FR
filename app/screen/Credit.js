import React, { useState, useEffect } from 'react'
import { StyleSheet, Text,Link, View, ImageBackground } from 'react-native';
import { useHistory } from 'react-router-native'
import Button from '../shared/Button'
import Slider from "react-native-sliders";
const Background = require('../../assets/Bgc.jpg')
import { styles } from '../style/styles'

export default function Login() {
    const [mt, setMt] = useState(4000)
    const [mois, setMois] = useState(12)
    const [mensu, setMensu] = useState(2463)
    const [interetGlobale, setInteretGlobale] = useState(0)
    const [interetParMois, setInteretParMois] = useState(0)
    // const [mensu,setMensu] = useState(0)
    const history = useHistory()
    function calcAmortissment(mt, mois) {
        mois = mois.value
        mt = mt.value
        const a = parseFloat(mt / mois)
        const frais = parseFloat(((0.71 * mois) * 50) / mois)
        var interGloble = parseFloat(((mt * mois * 20) / 1200).toFixed(2))
        setInteretGlobale(interGloble)
        var iParMois = parseFloat((interGloble / mois).toFixed(2))
        setInteretParMois(iParMois)
        var Amortissement = parseFloat((a + iParMois + frais).toFixed(2))
        setMensu(Amortissement)
    }
    // console.log(parseFloat(mensu));
    // console.log(typeof(parseFloat(mensu)));

    return (
        <ImageBackground
            source={Background}
            style={styles.imageBackground}
        >
           
           
            <View style={styles.creditSection}>
           
                <Text style={styles.creditTitle}>Crédit</Text>
                <Text style={styles.creditTitle2}> personnel</Text>

                <View style={styles.creditSectionMt}>
                    <Text style={styles.creditText}>Montant du crédit</Text>
                    <Slider
                        thumbTintColor='white'
                        minimumTrackTintColor='white'
                        minimumValue={4000}
                        maximumValue={500000}
                        onValueChange={value => {
                            //    console.log(value);
                            value = parseFloat(value[0].toFixed(0))
                            setMt({ value })
                            calcAmortissment(mt, mois)
                        }}
                    />

                    <Text style={styles.creditText}>{mt.value} DH</Text>
                </View>
                <View style={styles.creditSectionMt}>
                    <Text style={styles.creditText}>Durée du crédit</Text>
                    <Slider
                        thumbTintColor='white'
                        minimumTrackTintColor='white'
                        minimumValue={12}
                        maximumValue={84}
                        onValueChange={value => {
                            value = parseInt(value[0].toFixed(0))
                            setMois({ value })
                            calcAmortissment(mt, mois)
                        }}
                    />
                    <Text style={styles.creditText}>{mois.value} Mois</Text>
                </View>
                  {
                      {interetGlobale} ?
                      <View   >
                      <Text style={styles.creditText,styles.creditAmortissment}>Mensualité : {mensu ? mensu : ''}</Text>
                      
                      <Text style={styles.creditText,styles.creditAmortissment}>Interet globale :{interetGlobale ? interetGlobale : ''}</Text>
                      <Text style={styles.creditText,styles.creditAmortissment}>Interet par mois : {interetParMois ? interetParMois : ''}</Text>
                      <Button title='reservation' onPress={() => {
                          history.push("/reservation");
                        }} />
                             
           
                        </View>
                        :''
                    }  
                    
            </View>
        </ImageBackground>
    )
}
const style = StyleSheet.create({
    slide: {
        // thumbTintColor:'#000'
    }
})
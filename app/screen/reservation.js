import React from 'react'
import { ImageBackground, Text, View,Image, TextInput } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'
import firebase from 'firebase'
const Background = require('../../assets/Bgc.jpg')


// firebase configuration :
var firebaseConfig = {
    apiKey: 'AIzaSyCpOdUhrEHMfHVJWPD3TWDquRIAXz57PbI',
    authDomain: 'forex-55ac6.firebaseapp.com',
    projectId: 'forex-55ac6',
    storageBucket: 'forex-55ac6.appspot.com',
    messagingSenderId: '627544055038',
    appId: "588213651119-n3a479n1k5sd5fd7grssf2nlbqjdl065.apps.googleusercontent.com",
    measurementId: "G-HP1YYDHCPD"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default function Reservation () {
    
    const history = useHistory()
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("");
    const [telephone, setTelephone] = React.useState("");
    const [email, setEmail] = React.useState("");

    

    // add informaiton to firebase : 
    function add () {
        firebase.firestore().collection('reservation').add({
            nom : nom,
            prenom : prenom,
            telephone : telephone,
            email : email
        }).then((res) => {
            setNom(""),
            setPrenom(""),
            setTelephone(""),
            setEmail("")
        })
    }

    return (
        <ImageBackground
            source={Background}
            style={styles.imageBackground}
        >
        
        <View style={styles.cont}>
            <Text style={styles.tle}>Cordonnées</Text>
            <Text  style={styles.tlee}>Renseigner les champs ci-dessous et passer à l'étape suivante !</Text>
            <TextInput
            style={styles.inp}
            placeholder={' Nom'}
            placeholderTextColor="white"
            onChangeText={setNom}
            />
            <TextInput
            style={styles.inp}
            placeholder={' Prenom'}
            placeholderTextColor="white"
            onChangeText={setPrenom}
            />
             <TextInput
            style={styles.inp}
            placeholder={' Email'}
            placeholderTextColor="white"
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.inp}
            placeholder={'Téléphone'}
            placeholderTextColor="white"
            onChangeText={setTelephone}
            />
           
            <Button
            title='Simuler'
            onPress={() => {
                add()
            }}
            />
        </View>
        </ImageBackground>
    )
}


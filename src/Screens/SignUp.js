import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function SignUp({ navigation }) {
    const [checkUsername, setCheckUsername] = useState(null);
    const [checkPassword, setCheckPassword] = useState(null);

    function SignUpDetailsEntered() {
        if (checkUsername == null) {
            Alert.alert('Sign Up error', 'Username is empty. Please enter your username',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        } else if (checkPassword == null) {
            Alert.alert('Sign Up error', 'Password is empty. Please enter your password',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        }else {
            navigation.navigate('Login')
    }
    }

    const dispatch = useDispatch()

    function userSignUp(signUp){
        const action = {
            type: "SIGN_UP",
            payload: signUp
        }
        dispatch(action)
    } 
    
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>Please sign up to my app all about cats!</Text>
            <View style={styles.buttons}>
                <Text style={styles.text}>Enter a username:</Text>
                <TextInput onChangeText={setCheckUsername} style={styles.input} placeholder="username here" placeholderTextColor={'#003c8f'} />
                <Text style={styles.text}>Enter a password:</Text>
                <TextInput onChangeText={setCheckPassword} style={styles.input} placeholder="password here" placeholderTextColor={'#003c8f'} />
                <Button title={"SIGN_UP"} onPress={() => {userSignUp({ username: checkUsername, password: checkPassword }); SignUpDetailsEntered();}}></Button>
            </View>
        </ScrollView>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003c8f',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    text: {
        color: '#bbdefb',
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        lineHeight: 20,
        fontSize: 20
    },
    buttons: {
        flex: 1,
        flexGrow: 0.2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#002a66',
        padding: 10,
        backgroundColor: '#bbdefb'
    },
});
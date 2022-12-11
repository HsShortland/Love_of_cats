import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Login({ navigation }) {

    const [checkUsername, setCheckUsername] = useState(null);
    const [checkPassword, setCheckPassword] = useState(null);

    const signUp = useSelector((state) => state.signUpAndLogOut);

    function successfulLogIn() {
        const validUsername = signUp?.username;
        const validPassword = signUp?.password;
        if (checkUsername == null) {
            Alert.alert('Login error', 'Username is empty. Please enter your username',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        } else if (checkPassword == null) {
            Alert.alert('Login error', 'Password is empty. Please enter your password',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        }
        else if (checkUsername == validUsername && checkPassword == validPassword) {
            setCheckUsername(null)
            setCheckPassword(null)
            navigation.navigate('HomeScreen')
        }
        else {
            Alert.alert('Incorrect login details entered or user does not exist', 'Please click the sign up button to sign up or try entering your details again',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        }
    }
    const dispatch = useDispatch()
    function logOut() {
        const action = {
            type: "SIGN_OUT",
        }
        dispatch(action)
    }
    function logOutNavigateToLogin(){
        navigation.navigate('Login')
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>Welcome to my app all about cats!</Text>
                <View style={styles.buttons}>
                    <Text style={styles.text}>Please login below:</Text>
                    <TextInput value={checkUsername} onChangeText={setCheckUsername} style={styles.input} placeholder="username" placeholderTextColor={'#003c8f'} />
                    <TextInput value={checkPassword} onChangeText={setCheckPassword} style={styles.input} placeholder="password" placeholderTextColor={'#003c8f'} />
                    <Button title='Login' onPress={() => { successfulLogIn(); }}></Button>
                    <Text style={styles.text}>{'\n'}If you don't already have a log in, then please sign up:</Text>
                    <Button title='Sign up!' onPress={() => navigation.navigate('SignUp')}></Button>
                    <Button title='Log out' onPress={() => {logOut(); logOutNavigateToLogin();}}></Button>
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Login({ navigation }) { 

    const [checkUsername, setCheckUsername] = useState(null);
    const [checkPassword, setCheckPassword] = useState(null);

    function successfulLogIn(){
        const validUsername = 'kit_cats_89';
        const validPassword = 'Password1!';
        if (checkUsername == validUsername && checkPassword == validPassword){
            navigation.navigate('HomeScreen')
        }else if (checkUsername == null) {
            Alert.alert('Login error', 'Username is empty. Please enter your username',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        } else if (checkPassword == null) {
            Alert.alert('Login error', 'Password is empty. Please enter your password',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        }else {
            Alert.alert('Incorrect login details entered',  'Please try again',
                [{
                    text: 'OK', onPress: () => console.log('OK pressed')
                }])
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>Welcome to my app all about cats!</Text>
                <View style={styles.buttons}>
                    <Text style={styles.text}>Please login below:</Text>
                    <TextInput onChangeText={setCheckUsername} style={styles.input} placeholder="username" placeholderTextColor={'#003c8f'} />
                    <TextInput onChangeText={setCheckPassword} style={styles.input} placeholder="password" placeholderTextColor={'#003c8f'} />
                    <Button title='Login' onPress={() => {successfulLogIn();}}></Button>
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
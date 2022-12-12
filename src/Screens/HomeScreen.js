import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { useSelector, useDispatch} from 'react-redux';



export default function HomeScreen({navigation}) {

const signUp = useSelector((state) => state.signUpAndLogOut);
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
        <Text style={styles.text}>Welcome {signUp.username} to my app all about cats!</Text>
        <Text style={styles.text}>{'\n'}{'\n'}Cats are totally amazing!</Text>
        <View style={styles.buttons}>
            <Button1></Button1>
            <Button2 details='Click Here'></Button2>
            <Button title='Log out' onPress={() => {logOut(); logOutNavigateToLogin();}}></Button>
        </View>
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
margin:10,
padding:10,
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

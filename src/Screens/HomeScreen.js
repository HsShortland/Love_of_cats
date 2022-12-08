import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesomeIcons from '../Components/FontAwesomeIcons';

export default function HomeScreen({navigation}) {

const user = useSelector((state) => state.username)

const dispatch = useDispatch()

function addUser(user){
    const action = {
        type: "ADD_USER",
        payload: user
    }
    dispatch(action)
}

function removeUser(user){
    const action = {
        type: "REMOVE_USER",
        payload: user
    }
    dispatch(action)
}

    return (

        
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to my app all about cats!</Text>
        <StatusBar style="auto" />
        <Text style={styles.text}>Cats are totally amazing!</Text>
        <View style={styles.buttons}>
            <Text>User: {user}</Text>
            <Button title={"ADD_USER"} onPress={() =>addUser("Helen")}></Button>
            <Button title={"REMOVE_USER"} onPress={()=>removeUser()}></Button>
            <Button1></Button1>
            <Button2 details='Click Here'></Button2>
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
});

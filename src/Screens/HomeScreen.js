import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { useSelector} from 'react-redux';


export default function HomeScreen() {

const signUp = useSelector((state) => state.signUpAndLogOut);

    return (

        
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.text}>Welcome {signUp.username} to my app all about cats!</Text>
        <Text style={styles.text}>{'\n'}{'\n'}Cats are totally amazing!</Text>
        <View style={styles.buttons}>
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
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#002a66',
    padding: 10,
    backgroundColor: '#bbdefb'
},
});

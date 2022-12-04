import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen({navigation}) {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to my app all about cats!</Text>
        <StatusBar style="auto" />
        <Text style={styles.text}>Cats are totally amazing!</Text>
        <View style={styles.buttons}>
            <Button1></Button1>
            <Button2 details='Click Here'></Button2>
            <Button title="Go to About The Dev" onPress={() => navigation.navigate('AboutTheDev')}></Button>
            <Button title="Go Films With Cats" onPress={() => navigation.navigate('FilmsWithCats')}></Button>
            <Button title="Go to Cute Cats" onPress={() => navigation.navigate('CuteCats')}></Button>
        </View>
    </View>
);
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#e0ccff',
    alignItems: 'center',
    justifyContent: 'space-around',
    
},
text: {
color: '#6600ff',
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

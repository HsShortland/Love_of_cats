import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { times } from 'lodash';

class AboutTheDev extends React.Component {

    constructor() {
        super()
        this.state = { value: 0, data: null }
    }

    update = () => {
        this.setState({ value: this.state.value + 1 })
    }

    componentDidUpdate() {
        console.log(`the new value is: ${this.state.value}`)
    }
    async componentDidMount() {
        console.log(`About the dev screen has successfully mounted: ${Date.now()}`)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>About The Dev!!</Text>
                <StatusBar style="auto" />
                <Button title="About The Dev!" onPress={this.update}></Button>
                <Text style={styles.text}>Totally obsessed with cats!</Text>
                <Button1 ></Button1>
                <Button2></Button2>
            </View>
        )
    }
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
        margin: 10,
        padding: 10,
        lineHeight: 20,
        fontSize: 20
    },
    buttons: {
        flex: 1,
        flexGrow: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AboutTheDev;
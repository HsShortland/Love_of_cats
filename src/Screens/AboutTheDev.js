import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { connect } from 'react-redux';


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
        const { username } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome {username}</Text>
                <Text style={styles.text}>About The Dev!!</Text>
                <Text style={styles.text}>Totally obsessed with cats!</Text>
                <StatusBar style="auto" />
                <Button title="About The Dev!" onPress={this.update}></Button>
                <View style={styles.buttons}>
                    <Button1 ></Button1>
                    <Button2 details='Click Here'></Button2>
                </View>
            </View>
        )
    }
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
        flexGrow: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = (state) => ({
    username: state.signUpAndLogOut.username,
});

export default connect(mapStateToProps)(AboutTheDev);

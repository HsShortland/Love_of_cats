import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import * as React from 'react';
import { connect } from 'react-redux';

class CuteCats extends React.Component {

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
        console.log(`Cute Cats screen has successfully mounted: ${Date.now()}`)
    }
    render() {
        const { username } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>Welcome {username}</Text>
                    <Text style={styles.text}>Cute Cats!!</Text>
                    <StatusBar style="auto" />
                    <Button title="I love cats!" onPress={this.update}></Button>
                    <Text style={styles.text}>Random cat images!</Text>
                    <StatusBar style="auto" />
                    <Image style={styles.image} source={require('../../assets/cat_in_a_window.jpg')} />
                    <Image style={styles.image} source={require('../../assets/cute_cat_close_up.jpg')} />
                    <Image style={styles.image} source={require('../../assets/cute_moustache_cat.jpg')} />
                    <Image style={styles.image} source={require('../../assets/street_art_cat_with_wool.jpg')} />
                    <Image style={styles.image} source={require('../../assets/street_art_two_cats.jpg')} />
                    <View style={styles.buttons}>
                    <Button1 ></Button1>
                    <Button2 details='Click Here'></Button2>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    username: state.signUpAndLogOut.username,
});

export default connect(mapStateToProps)(CuteCats);

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
    },
    image:{
        width: 250,
        height: 250,
        margin:10
    },
    scrollView: {
    },
});
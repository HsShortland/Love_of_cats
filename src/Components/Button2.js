import React from 'react';
import {Pressable, StyleSheet, Text, View, Button} from 'react-native';

export default function Button2(props) {
    function RandomSong(){
        console.log('I want to break free!')
    }
    return (
        <Pressable style={styles.button2} onPress={RandomSong}>
            <Text style={styles.text}>{props.details}</Text>
        </Pressable>
);
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
        },
    button2: {
        backgroundColor: '#a366ff',
        lineHeight: 20,
        marginTop: 10,
        marginBottom: 10
        }
    });

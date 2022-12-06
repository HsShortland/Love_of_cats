import React from 'react';
import {Pressable, StyleSheet, Text, View, Button} from 'react-native';

export default function Button2(props) {
    function RandomSong(){
        console.log('I want to break free!')
    }
    return (
        <Pressable  style={styles.button2} onPress={RandomSong}>
            <Text style={styles.text}>{props.details}</Text>
        </Pressable>
);
}

const styles = StyleSheet.create({
    text: {
        color: '#eeffff',
        fontSize: 16,
        textAlign: 'center'
        },
    button2: {
        backgroundColor: '#417ff1',
        lineHeight: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        width:110
        }
    });

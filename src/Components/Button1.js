import { StyleSheet, Text, View, Button } from 'react-native';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';

export default function Button1(props) {
    const [generateWord, setGenerateWord] = useState('Click Here');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Button1 successfully mounted')
    }, [])

    useEffect(()=>{
        console.log(`Count was updated to ${count}`)
    }, [count])

    function changeButtonText(){
        var words = ["Press the button!", "Tap the button", "Touch the button"]
        var word = words[Math.floor(Math.random()*words.length)]
        setGenerateWord(word)
        console.log("Random word is: " + word)
    }

    function counter(){
        setCount(count+1)
    }

    return (
            <FontAwesome.Button  backgroundColor={'#63a4ff'} name="random" onPress={()=>{changeButtonText(); counter();}}>{generateWord}
            </FontAwesome.Button>
);
}
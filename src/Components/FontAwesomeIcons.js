import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useCallback } from 'react';


export default function FontAwesomeIcons({navigation}) {
    const [fontsLoaded] = useFonts({
        'Font Awesome 6 Free Solid': require('../../assets/fonts/fa-solid-900.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {}, [fontsLoaded]);
    if (!fontsLoaded) return null;

    return (
        <View onLayout={onLayoutRootView}>
        <Text style={{fontFamily:'Font Awesome 6 Free Solid'}}></Text>
        </View>
);
}
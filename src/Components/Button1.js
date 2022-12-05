import { StyleSheet, Text, View, Button } from 'react-native';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';

export default function Button1() {
    
    return (
            <FontAwesome.Button title='Click Me!' backgroundColor={'#63a4ff'} name="random"> Click Here!
            </FontAwesome.Button>
);
}
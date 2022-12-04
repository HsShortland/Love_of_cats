import HomeScreen from './src/Screens/HomeScreen';
import AboutTheDev from './src/Screens/AboutTheDev';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CuteCats from './src/Screens/CuteCats';

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{title: 'Welcome'}}
    />
    <Stack.Screen name = "AboutTheDev" component ={AboutTheDev}/>
    <Stack.Screen name = "CuteCats" component ={CuteCats}/>
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;
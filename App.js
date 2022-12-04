import HomeScreen from './src/Screens/HomeScreen';
import AboutTheDev from './src/Screens/AboutTheDev';
import CuteCats from './src/Screens/CuteCats';
import FilmsWithCats from './src/Screens/FilmsWithCats';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () =>{
  return(
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({tabBarIcon: () => {
        if (route.name === 'Home') {
          return <FontAwesome 
            name={'home'}/>;
            } else if (route.name === 'AboutTheDev') {
              return <FontAwesome 
            name={'info'}/>;
            } else if (route.name === 'CuteCats') {
              return <FontAwesome 
              name={'photo'}/>;
            }
            else if (route.name === 'FilmsWithCats') {
              return <FontAwesome 
              name={'file-text'}/>;
            }
          },
          tabBarActiveTintColor: '#004ba0',
          tabBarInactiveTintColor: 'black',
          tabBarInactiveBackgroundColor: '#eeffff',
          tabBarActiveBackgroundColor: '#8aacc8'
        })}>
    <Tab.Screen name="Home"component={HomeScreen} oprttions={{title: 'Welcome'}}/>
    <Tab.Screen name = "AboutTheDev" component ={AboutTheDev}/>
    <Tab.Screen name = "CuteCats" component ={CuteCats}/>
    <Tab.Screen name = "FilmsWithCats" component ={FilmsWithCats}/>
    </Tab.Navigator>
</NavigationContainer>
  );
};

export default App;
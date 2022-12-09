import HomeScreen from './src/Screens/HomeScreen';
import AboutTheDev from './src/Screens/AboutTheDev';
import CuteCats from './src/Screens/CuteCats';
import FilmsWithCats from './src/Screens/FilmsWithCats';
import Login from './src/Screens/Login';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FontAwesomeIcons from './src/Components/FontAwesomeIcons';

const Tab = createBottomTabNavigator();

function userReducer(state, action){
  switch(action.type){
    case "ADD_USER":
      console.log('here')
      return state.username = {...state, username: action.payload}
    case "REMOVE_USER":
      console.log('remove')
      return state.username = {...state, username:"None"}
    default:
      console.log('default')
      return state
  }
}

const Stack = createNativeStackNavigator();

const initialState = {username:'No user set yet'}

const store = createStore(userReducer, initialState)

const App = () =>{
return(
    <Provider store={store}>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({tabBarIcon: () => {
        if (route.name === 'Login/Log out') {
          return <FontAwesomeIcons glyph={''}></FontAwesomeIcons>;
        } else if(route.name === 'Home') {
          return <FontAwesomeIcons glyph={''}></FontAwesomeIcons>;
            } else if (route.name === 'AboutTheDev') {
              return <FontAwesomeIcons glyph={''}></FontAwesomeIcons>;
            } else if (route.name === 'CuteCats') {
              return <FontAwesomeIcons glyph={''}></FontAwesomeIcons>;
            }
            else if (route.name === 'FilmsWithCats') {
              return <FontAwesomeIcons glyph={''}></FontAwesomeIcons>;
            }
          },
          tabBarActiveTintColor: '#004ba0',
          tabBarInactiveTintColor: 'black',
          tabBarInactiveBackgroundColor: '#eeffff',
          tabBarActiveBackgroundColor: '#8aacc8'
        })}>
      <Tab.Screen name = "Login/Log out" component ={Login}/>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Welcome'}}/>
      <Tab.Screen name = "AboutTheDev" component ={AboutTheDev}/>
      <Tab.Screen name = "CuteCats" component ={CuteCats}/>
      <Tab.Screen name = "FilmsWithCats" component ={FilmsWithCats}/>
      </Tab.Navigator>
</NavigationContainer>
</Provider>
  );
};

export default App;
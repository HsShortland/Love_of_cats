import HomeScreen from './src/Screens/HomeScreen';
import AboutTheDev from './src/Screens/AboutTheDev';
import CuteCats from './src/Screens/CuteCats';
import FilmsWithCats from './src/Screens/FilmsWithCats';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
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

const initialState = {username:'No user set yet'}

const store = createStore(userReducer, initialState)

const App = () =>{

return(
    <Provider store={store}>
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
              return <FontAwesomeIcons></FontAwesomeIcons>;
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
    <Tab.Screen name="Home"component={HomeScreen} options={{title: 'Welcome'}}/>
    <Tab.Screen name = "AboutTheDev" component ={AboutTheDev}/>
    <Tab.Screen name = "CuteCats" component ={CuteCats}/>
    <Tab.Screen name = "FilmsWithCats" component ={FilmsWithCats}/>
    </Tab.Navigator>
</NavigationContainer>
</Provider>
  );
};

export default App;
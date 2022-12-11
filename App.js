import HomeScreen from './src/Screens/HomeScreen';
import AboutTheDev from './src/Screens/AboutTheDev';
import CuteCats from './src/Screens/CuteCats';
import FilmsWithCats from './src/Screens/FilmsWithCats';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FontAwesomeIcons from './src/Components/FontAwesomeIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const initialState = { signUpAndLogOut: { username: null, password: null } }

const store = createStore(registerUserReducer, initialState)


function registerUserReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      console.log('register user')
      return state.signUpAndLogOut = { ...state, signUpAndLogOut: action.payload }
    case "SIGN_OUT":
      console.log('signed out')
      return state.signUpAndLogOut = { ...state, signUpAndLogOut: { username: null, password: null } }
    default:
      console.log('default')
      return state
  }
}
const LoginScreen = createNativeStackNavigator();

function LoginScreenStack() {
  return (
    <LoginScreen.Navigator>
      <LoginScreen.Screen name="Login" component={Login} />
      <LoginScreen.Screen name="SignUp" component={SignUp} />
      <LoginScreen.Screen name="HomeScreen" component={HomeScreen} />
    </LoginScreen.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Login/Log out') {
                return <FontAwesomeIcons glyph={''}></FontAwesomeIcons>;
              } else if (route.name === 'HomeScreen') {
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
          <Tab.Screen name="Login/Log out" component={LoginScreenStack} />
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="AboutTheDev" component={AboutTheDev} />
          <Tab.Screen name="CuteCats" component={CuteCats} />
          <Tab.Screen name="FilmsWithCats" component={FilmsWithCats} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );


};

export default App;


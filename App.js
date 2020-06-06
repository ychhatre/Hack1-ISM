import  React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Home from './screens/HomeScreen';

import * as firebase from 'firebase';


function HomeScreen() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}



function FeedScreen() {
    const navigation = useNavigation();
    return(
          <React.Fragment>
            <Feed navigation={navigation}/>
          </React.Fragment>
    );
}

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <Login navigation={navigation}/>
    </ React.Fragment>
  );
}

function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <Register navigation={navigation}/>
    </React.Fragment>
  );
}

function LoadingScreen() {
  return (
    <Loading />
  )
}

const Tab = createMaterialBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Feed"
    tabBarOptions={{ activeTintColor:"white", inactiveTintColor:"grey" }}
      barStyle={{ backgroundColor: '#1c1c1c' }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({color}) => <Icon  name='home'  type='font-awesome'  color={color}  size='24'/>
      }}/>
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();
export default function App() {

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={MainTabNavigator} />
        </Stack.Navigator>
     </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:0,
    justifyContent: 'center'
  },
  buttonContainer: {
    position:'absolute',
    bottom:300,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#1c1c1c",
  },
  googleLogin: {
    color: 'black',
    borderBottomColor: 'black',
    backgroundColor: 'white',
  },
});

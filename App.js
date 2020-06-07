
import  React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'
import 'react-native-gesture-handler';
import Profile from "./screens/profile.js"
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Feed from "./screens/FeedScreen.js";
import 'firebase/firestore';
import Post from "./screens/PostScreen.js"



import * as firebase from 'firebase';

window.addEventListener = x => x


var firebaseConfig = {
  apiKey: "AIzaSyAtw829AUfwng1BMjGTcCy5GWVoAyaQoLs",
  authDomain: "i-s-m-3b72e.firebaseapp.com",
  databaseURL: "https://i-s-m-3b72e.firebaseio.com",
  projectId: "i-s-m-3b72e",
  storageBucket: "i-s-m-3b72e.appspot.com",
  messagingSenderId: "485377043748",
  appId: "1:485377043748:web:200186207ac6e0ee61d7b1",
  measurementId: "G-RKM3PKFWC6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();







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

function FeedScreen() {
  const navigation = useNavigation();
  return(
    <Feed navigation={navigation}/>

  )
}

function ProfileScreen() {
  const navigation= useNavigation();
  return(
    <Profile navigation={navigation}/>

  )
}

function PostScreen() {
  const navigation = useNavigation();
  return(
    <Post navigation={navigation}/>
  )
}
const Tab = createMaterialBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Feed"
    tabBarOptions={{ activeTintColor:"white", inactiveTintColor:"grey" }}
      barStyle={{ backgroundColor: '#1c1c1c' }}>
      <Tab.Screen name='Profile' component={ProfileScreen} options={{
        tabBarIcon: ({color}) => <Icon  name='home'  type='font-awesome'  color={color}  size='24'/>
      }}/>
      <Tab.Screen name='Feed' component={FeedScreen} options={{
        tabBarIcon: ({color}) => <Icon  name='inbox'  type='font-awesome'  color={color}  size='24'/>
      }}/>
      <Tab.Screen name='Post' component={PostScreen} options={{
        tabBarIcon: ({color}) => <Icon  name='plus'  type='font-awesome'  color={color}  size='24'/>
      }}/>

    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();
export default function App() {

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="float">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Feed" component={MainTabNavigator} options={{
              headerShown:false,
          }}/>
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
  loginText: {
    color: 'white',
  },
  loginTextt: {
    color: 'black',
    marginLeft: 6
  }

});

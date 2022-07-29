import React,{useState,createContext,useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth'
import LoginPage from "./pages/login"
import SignUpPage from './pages/signup';
import HomePage from './pages/Home';

export const userContext= createContext("Home")

export default function App() {
  const Stack=createNativeStackNavigator();

const [name,onChangeName]=useState("Name");
const [surname, onChangeSurname]=useState("Surname");
const[number,onchangeNumber]=useState("Number");
const [email,onChangeEmail]=useState("Email");


  const auth= getAuth();


function handlechange(){
  signInWithPhoneNumber(auth, number, appVerifier)
  .then((confirmationResult)=>{

  }).catch((error)=>{
    console.log(error);
  })
  }


  return (
    <NavigationContainer>
 
    <userContext.Provider value={{onChangeName,onChangeSurname,onchangeNumber,onchangeNumber,handlechange}}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={SignUpPage} onChangeName={onChangeName}/>
            <Stack.Screen name="Home" component={HomePage}/>
          </Stack.Navigator>
    </userContext.Provider>
   
    </NavigationContainer>
    );
}

const styles=StyleSheet.create({
  font:{
    fontSize:30,
  }
})
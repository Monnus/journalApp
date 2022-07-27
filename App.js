import React,{useState,createContext,useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';

import LoginPage from "./pages/login"
import SignUpPage from './pages/signup';

const userContext= createContext("Home")
export default function App() {

const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
   <userContext.Provider >
          <Stack.Navigator initialRouteName='Signin'>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signin" component={SignUpPage}/>
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
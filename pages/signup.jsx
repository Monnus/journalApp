import React,{useState,useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import app from '../firebase';
import {getAuth} from "firebase/auth";
import { userContext } from '../App';



function SignUpPage({navigation}){

const {onChangeName,onChangeSurname,onchangeNumber,onChangeEmail,handlechange} =useContext(userContext);
const Id=1;

    return (
        <SafeAreaView style={styles.container}>
        <View style={{flex:1,width:"100%"}}>
        <Image source={require("../assets/wave/Wave.svg")} style={styles.wavePNG}/>
          </View>
       
            <View style={{height:150,justifyContent:"space-around"}}>
            <Octicons name="shield-lock" size={54} color="black" />  
            <Text style={{fontSize: 20, fontWeight:600, color:"white"}}>Sign Up</Text>
                </View>
        
                <View style={styles.registerContainer}>
                  <View id="recaptcha-container"><Text>recaptcha-container</Text></View>
                  <TextInput style={styles.txtInput} onChangeText={text=>onChangeName(text)} placeholder="Name" />
                  <TextInput style={styles.txtInput} onChangeText={text=>onChangeSurname(text)} placeholder="Surname"/>
                  <TextInput style={styles.txtInput} onChangeText={num=>onchangeNumber(num)} placeholder="Number"/>
                  <TextInput style={styles.txtInput} onChangeText={text=>onChangeEmail(text)} placeholder="Email"/>
                </View>
        
                  <View style={styles.btnView}>
                <TouchableOpacity
                onPress={() => handlechange(Id)}
                style={{ backgroundColor: '#0E2A47' ,width:300,height:"51px",
                shadowColor: 'blue',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,}} >
                <Text style={styles.textBtn}>Sign up</Text>
              </TouchableOpacity>
                  </View>
                  
                  <View style={styles.tosignIn}>
                    <Text style={{color:"white",fontSize:17}}>Already have an account? <Text style={{color:"blue",fontSize:17}} onPress={()=> navigation.navigate("Login")}>Sign in</Text> </Text>
                    </View>
                    
                    <View style={{flex:1,width:"100%",height:100}}>
                    
                   <Image source={require("../assets/wave/Wave.svg")} style={{
                    width: "100%",
                    height:200,
                    display:"block",
                    transform:[{rotate:"180deg"}]
                  }}/>
                  </View>

              <StatusBar style="auto" />
            </SafeAreaView>
   
    )
}


const styles = StyleSheet.create({
    container: {
  flex:1,
      backgroundColor: '#A60B90',
      alignItems: 'center',
      justifyContent:"space-evenly"
    },
    wavePNG: {
      width: "100%",
      height:200,
      display:"block",
      
    },
    registerContainer:{
      flex:2,
         borderWidth: 2,
         justifyContent:"space-evenly",
         borderColor:"#1170EC",
        width:"90%",
      backgroundColor:"rgba(14, 42, 71,0.7)",
      shadowColor: 'blue',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
  
    },
    txtInput:{
      color:"white",
      width:"100%",
      height:40,
      padding:10,
      borderBottomWidth:2,
      borderBottomColor:"white",
      fontSize:20,
    },
    btnView:{
      height:150,
      // borderWidth: 2,
      // borderColor:"#1170EC",
      justifyContent:"center",
      alignItems:"center",
      
  
    },
    textBtn:{ 
      fontSize: 20, 
      color: '#fff' ,
      alignSelf:"center",
      lineHeight:"45px",
    },
    tosignIn:{
      
      color:"white",
      width:280,
      height:50,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"rgba(17, 112, 236,0.4)",
  
    },
  });
export default SignUpPage;
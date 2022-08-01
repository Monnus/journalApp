import React,{useState} from "react";
import { StyleSheet ,Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginPage({ navigation }){
    const [name,onChangeName]=useState("Name");
    const[number,onchangeNumber]=useState("Number");

    console.log(name)

    return (
        <SafeAreaView style={styles.container}>
      <View style={{flex:4,width:"100%"}}>
        <Image source={require("../assets/wave/Wave.svg")} style={styles.wavePNG}/>
          </View>

          <View style={{height:150,justifyContent:"space-around"}}>
          <FontAwesome name="user-circle-o" size={54} color="black" />

            <Text style={{fontSize: 20, fontWeight:600, color:"white"}}>Sign In</Text>
                </View>

                
                <View style={styles.registerContainer}>
    
                  <TextInput style={styles.txtInput} placeholder={name} onChangeText={text=>onChangeName(text)} />
                  <TextInput style={styles.txtInput} placeholder={number} onChangeText={num=>onchangeNumber(num)}/>
    
                </View>
                        <View style={styles.btnView}>
                        <TouchableOpacity
                        onPress={() => alert('Hello, world!')}
                        style={{ backgroundColor: '#0E2A47' ,width:300,height:"51px",
                        shadowColor: 'blue',
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,}}>
                        <Text style={styles.textBtn}>Sign in</Text>
                    </TouchableOpacity>
                        </View>

                        <View style={styles.tosignIn}>
                    <Text style={{color:"white",fontSize:17}}>Dont have an account? <Text style={{color:"blue",fontSize:17}} onPress={()=> navigation.navigate("Signup")}>Sign in</Text> </Text>
                    </View>

                    <View style={{flex:3,width:"100%",height:100}}>
                   <Image source={require("../assets/wave/Wave.svg")} style={{
                    width: "100%",
                    height:200,
                    display:"block",
                    transform:[{rotate:"180deg"}]
                  }}/>
                  </View>

        </SafeAreaView>
    );
}
 const styles=StyleSheet.create({
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
        "&hover":{color:"red"}
      },
      tosignIn:{
        color:"white",
        width:280,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(17, 112, 236,0.4)",
    
      },
 })
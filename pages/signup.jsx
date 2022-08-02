import React,{useState,useContext,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView ,Alert,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { userContext } from '../App';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebaseConfig from "../firebase"
import firebase from 'firebase/compat/app';



function SignUpPage({navigation}){
      const [phoneNumber, setPhoneNumber] = useState('');
       const [code, setCode] = useState('');
       const [verificationId, setVerificationId] = useState(null);
       const recaptchaVerifier = useRef(null);
   
const {onChangeName,onChangeSurname,onchangeNumber,onChangeEmail,handlechange} =useContext(userContext);
const Id=1;

const sendVerification = () => {
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
 const provider= phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      setPhoneNumber('');
      if(verificationId){
        console.log(verificationId);
      }

 };

 const confirmCode = () => {
  const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
  );
  console.log(credential);
  firebase.auth().signInWithCredential(credential)
  .then(() => {
      setCode('');
  })
  .catch((error) => {
      // show an alert in case of error
      alert(error)
  })
  Alert.alert(
      'Login Successful. Welcome To Your Journal Diary',
  );
  if(credential.params.verificationCode){
    navigation.navigate("Home");
  }
}

    return (
        <SafeAreaView style={styles.container}>
        <View style={{flex:1,width:"100%"}}>
        <Image source={require("../assets/wave/Wave.svg")} style={styles.wavePNG}/>
          </View>
       
            <View style={{height:150,justifyContent:"space-around"}}>
            <Octicons name="shield-lock" size={54} color="black" />  
            <Text style={{fontSize: 20, fontWeight:600, color:"white"}}>Sign Up</Text>
                </View>

                <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                />
                <View style={styles.registerContainer}>
              
                <TextInput
                    placeholder='Your phone number'
                    onChangeText={setPhoneNumber}
                    keyboardType='phone-pad'
                    autoCompleteType='tel'
                    style={styles.txtInput}
                    />
                         <View style={styles.btnView}>
                <TouchableOpacity
                onPress={sendVerification}
                style={{ backgroundColor: '#0E2A47' ,width:300,height:"51px",
                shadowColor: 'blue',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,}} >
                <Text style={styles.textBtn}>  Send Verification</Text>
              </TouchableOpacity>
                  </View>
                  
                    </View>
                    <View style={styles.registerContainer}>
                   <TextInput
                    placeholder='Confirm code'
                    onChangeText={setCode}
                    keyboardType='number-pad'
                    style={styles.txtInput}
                    />
                  <TouchableOpacity style={styles.tosignIn} onPress={confirmCode} >
                    <Text style={{color:"white",fontSize:17}}>click to Verify <Text style={{color:"blue",fontSize:17}}>Code</Text> </Text>
                    </TouchableOpacity>
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
   
    },
    wavePNG: {
      width: "100%",
      height:200,
      display:"block",
      
    },
    registerContainer:{
flex:3,
  marginBottom:10,
         borderWidth: 2,
         justifyContent:"space-evenly",
         alignItems:"center",
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
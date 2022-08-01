
import React, {useState,useRef} from 'react';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import {View,Text, TextInput, TouchableOpacity,Alert} from 'react-native';
import firebaseConfig from "../../firebase"
import firebase from 'firebase/compat/app';

console.log(firebaseConfig);

export default  function OTP(){


       const [phoneNumber, setPhoneNumber] = useState('');
       const [code, setCode] = useState('');
       const [verificationId, setVerificationId] = useState(null);
       const recaptchaVerifier = useRef(null);
   
       const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
            setPhoneNumber('');
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
      }
        return(
            <View style={{}}>
                <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                />
                <Text style={{}}>
                    Login using OTP
                </Text>
                <TextInput
                    placeholder='Phone Number with your code'
                    onChangeText={setPhoneNumber}
                    keyboardType='phone-pad'
                    autoCompleteType='tel'
                    style={{}}
                    />
                    <TouchableOpacity style={{}} onPress={sendVerification}>
                        <Text style={{}}>
                            Send Verification
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                    placeholder='Confirm code'
                    onChangeText={setCode}
                    keyboardType='number-pad'
                    style={{}}
                    />
                           <TouchableOpacity style={{}} onPress={confirmCode}>
                        <Text style={{}}>
                            Confirm Verification
                        </Text>
                    </TouchableOpacity>
            </View>
        )
     }
    
    
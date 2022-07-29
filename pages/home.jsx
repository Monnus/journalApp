import React,{useState} from "react";
import { StyleSheet ,Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';
import { Audio } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SDK_VERSION } from "firebase/app";
import { Platform } from "react-native-web";
// import { Foundation } from '@expo/vector-icons';
// <Foundation name="previous" size={24} color="black" /><Foundation name="next" size={24} color="black" />//


//packagename
//andriod studio
// generate andriood Platform  
// open it on adriod studio to download An apk
//SDK  (apk andriod platform)





export default function HomePage({navigation}){
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
  
    async function startRecording() {
      try {
        const permission = await Audio.requestPermissionsAsync();
  
        if (permission.status === "granted") {
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true
          });
          
          const { recording } = await Audio.Recording.createAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );
  
          setRecording(recording);
        } else {
          setMessage("Please grant permission to app to access microphone");
        }
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  
    async function stopRecording() {
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
  
      let updatedRecordings = [...recordings];
      const { sound, status } = await recording.createNewLoadedSoundAsync();
  console.log(status);
      updatedRecordings.push({
        sound: sound,
        duration: getDurationFormatted(status.durationMillis),
        file: recording.getURI()
      });
  
      setRecordings(updatedRecordings);
    }
  
    function getDurationFormatted(millis) {
      const minutes = millis / 1000 / 60;
      const minutesDisplay = Math.floor(minutes);
      const seconds = Math.round((minutes - minutesDisplay) * 60);
      const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
      return `${minutesDisplay}:${secondsDisplay}`;
    }
  
    function getRecordingLines() {
      return recordings.map((recordingLine, index) => {
        console.log(recordingLine);
        return (
          <View key={index} style={styles.row}>
            <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration=="NaN:NaN"?"Duration Not aviable":recordingLine.duration}</Text>
            <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
         
          </View>
        );
      });
    }

    return(
<SafeAreaView style={styles.container}>
    <View style={styles.heading}>
            <Text style={styles.headingTxt}>Journal App</Text>
    </View>
    <View style={styles.logoutView}>
            <MaterialIcons name="logout" size={35} color="black"  onPress={()=> navigation.navigate("Login")} />
            <Text style={{color:"white",fontSize:20,}}  onPress={()=> navigation.navigate("Login")}>Logout</Text>
    </View>
    <View style={styles.recordingsHolder}>
    <Text>{message}</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording} />
      {getRecordingLines()}
    </View>
    <View style={styles.fixeBottomPlayer}>
     <Text style={{alignSelf:"center",color:"white",fontSize:15,}}>new playing:Notes on Exports and Import</Text>
        <View style={{flex:1, flexDirection:"row",justifyContent:"space-around"}}>
                <View style={{flex:3,flexDirection:"row", alignItems:"center",}}>
                    <Foundation name="record" size={60} color="black" style={{shadowColor:"red",
                    borderLeftWidth:2,
                    borderRightWidth:2,
                    borderBottomWidth:2,
                    borderTopWidth:2,
                    borderRadius:"40%",
                    alignSelf:"center",
              marginLeft:50,
              backgroundColor:"red",
                    borderColor:"black"}}  onPress={recording ? stopRecording : startRecording} />
                </View>
                <View style={{flex:2, flexDirection:"row",justifyContent:"space-around"}}>
                    <Foundation name="previous" size={34} color="black" /><AntDesign name="play" size={34} color="black"  onPress={() => recordingLine.sound.replayAsync()} title="Play"/> <Foundation name="next" size={34} color="black" />
                </View>
        </View>
    </View>
</SafeAreaView>        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#A60B90',
        alignItems: 'center',
        justifyContent:"space-evenly",  
    },
    heading:{
        flex:1,
        backgroundColor: '#113D79',
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
      
    },
    headingTxt:{
        fontSize:20,
        fontWeight:500,
        color:"white",
    },
    logoutView:{
        flex:1,
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end",
        marginLeft:-50,
        marginTop:15,
    },
    recordingsHolder:{
        flex:6,
        backgroundColor:"rgba(246, 111, 226, 0.5)",
        width:"80%",
        justifyContent:"space-evenly",
        marginBottom:10,
    },
    fixeBottomPlayer:{
        flex:1,
        
        backgroundColor:"#1170EC",
        width:"100%"
        
    }

})
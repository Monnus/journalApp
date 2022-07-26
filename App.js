import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
<Image source={require("./assets/wave/Wave.svg")} style={styles.wavePNG}/>
    <View style={{height:150,justifyContent:"space-around"}}>
    <Octicons name="shield-lock" size={54} color="black" />  
    <Text style={{fontSize: 20, fontWeight:600, color:"white"}}>Sign Up</Text>
        </View>

        <View style={styles.registerContainer}>
          <Text>Hellow</Text>
        </View>

          <View style={styles.btnView}>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: '#0E2A47' ,width:300,height:"51px",
        shadowColor: 'blue',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,}}>
        <Text style={styles.textBtn}>Sign up</Text>
      </TouchableOpacity>
          </View>
          <View style={styles.tosignIn}><Text>Already have an account? Sign in</Text></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
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
    height:100,
    display:"block",
    
  },
  registerContainer:{
    flex:2,
       borderWidth: 2,
       borderColor:"#1170EC",
      width:"90%",
    backgroundColor:"rgba(14, 42, 71,0.7)",

  },
  btnView:{
    height:150,
    // borderWidth: 2,
    // borderColor:"#1170EC",
    justifyContent:"center",
    alignItems:"center",
    

  },
  textBtn:{ fontSize: 20, color: '#fff' ,alignSelf:"center",lineHeight:"45px",},
  tosignIn:{
    width:280,
    hieght:230,
    backgroundColor:"rgba(17, 112, 236,0.7)",
  }
});

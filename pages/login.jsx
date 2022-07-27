import React from "react";
import { StyleSheet ,Text, SafeAreaView ,Image,View,ImageBackground,Button,TouchableOpacity,TextInput} from 'react-native';


export default function LoginPage({ navigation }){
    console.log(navigation);
    return (
        <View>
        <Text>hello world</Text>
        <Button onPress={()=>navigation.navigate("Signin")}/>
        </View>
    );
}

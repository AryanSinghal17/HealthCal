import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {targetHR} from "../../utils/heartRate";
import styles from "../../styles/globalStyles";

export default function TargetHeartRateScreen({navigation}){

 const[a,setA]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const val=targetHR(+a);
  setR({...val,color:"#4A90E2"});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>Target Heart Rate</Text>

  <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setA}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>{r.min.toFixed(0)} - {r.max.toFixed(0)} bpm</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

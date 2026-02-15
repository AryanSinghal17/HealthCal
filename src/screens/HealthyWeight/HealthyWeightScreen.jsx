import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {healthyWeight} from "../../utils/healthyWeight";
import styles from "../../styles/globalStyles";

export default function HealthyWeightScreen({navigation}){

 const[h,setH]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const val=healthyWeight(+h);
  setR({...val,color:"#2ecc71"});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>Healthy Weight Range</Text>

  <TextInput style={styles.input} placeholder="Height cm" keyboardType="numeric" onChangeText={setH}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>{r.min.toFixed(1)} - {r.max.toFixed(1)} kg</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

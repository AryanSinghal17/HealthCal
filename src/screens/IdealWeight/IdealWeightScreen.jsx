import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {idealWeight} from "../../utils/idealWeight";
import styles from "../../styles/globalStyles";

export default function IdealWeightScreen({navigation}){

 const[g,setG]=useState("male");
 const[h,setH]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const val=idealWeight(g,+h);
  setR({value:val.toFixed(1),color:"#4A90E2"});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>Ideal Weight</Text>

  <TextInput style={styles.input} placeholder="Gender male/female" onChangeText={setG}/>
  <TextInput style={styles.input} placeholder="Height cm" keyboardType="numeric" onChangeText={setH}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>{r.value} kg</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

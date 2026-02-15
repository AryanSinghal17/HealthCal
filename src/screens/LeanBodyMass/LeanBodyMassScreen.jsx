import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {leanMass} from "../../utils/leanMass";
import styles from "../../styles/globalStyles";

export default function LeanBodyMassScreen({navigation}){

 const[g,setG]=useState("male");
 const[w,setW]=useState("");
 const[h,setH]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const val=leanMass(g,+w,+h);

  let color="#2ecc71";
  if(val<40) color="#3498db";
  else if(val>70) color="#f39c12";

  setR({value:val.toFixed(1),color});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>Lean Body Mass</Text>

  <TextInput style={styles.input} placeholder="Gender male/female" onChangeText={setG}/>
  <TextInput style={styles.input} placeholder="Weight kg" keyboardType="numeric" onChangeText={setW}/>
  <TextInput style={styles.input} placeholder="Height cm" keyboardType="numeric" onChangeText={setH}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>{r.value} kg</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

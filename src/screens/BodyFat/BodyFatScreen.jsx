import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {bmi} from "../../utils/bmi";
import {bodyFat} from "../../utils/bodyFat";
import styles from "../../styles/globalStyles";

export default function BodyFatScreen({navigation}){

 const[g,setG]=useState("male");
 const[w,setW]=useState("");
 const[h,setH]=useState("");
 const[a,setA]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const b=bmi(+w,+h);
  const val=bodyFat(g,b,+a);

  let color="#2ecc71";
  if(val<10) color="#3498db";
  else if(val>25) color="#e74c3c";

  setR({value:val.toFixed(1),color});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>Body Fat %</Text>

  <TextInput style={styles.input} placeholder="Gender male/female" onChangeText={setG}/>
  <TextInput style={styles.input} placeholder="Weight kg" keyboardType="numeric" onChangeText={setW}/>
  <TextInput style={styles.input} placeholder="Height cm" keyboardType="numeric" onChangeText={setH}/>
  <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setA}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>{r.value}%</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

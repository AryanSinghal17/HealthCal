import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {bmr} from "../../utils/bmr";
import styles from "../../styles/globalStyles";

export default function BMRScreen({navigation}){

 const[g,setG]=useState("male");
 const[w,setW]=useState("");
 const[h,setH]=useState("");
 const[a,setA]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const val=bmr(g,+w,+h,+a);

  let color="#2ecc71";
  if(val<1200) color="#3498db";
  else if(val>2000) color="#f39c12";

  setR({value:val.toFixed(0),color});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>BMR Calculator</Text>

  <TextInput style={styles.input} placeholder="Gender male/female" onChangeText={setG}/>
  <TextInput style={styles.input} placeholder="Weight kg" keyboardType="numeric" onChangeText={setW}/>
  <TextInput style={styles.input} placeholder="Height cm" keyboardType="numeric" onChangeText={setH}/>
  <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" onChangeText={setA}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>BMR: {r.value} kcal/day</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

import React,{useState} from "react";
import {View,Text,TextInput,Button} from "react-native";
import {caloriesBurned} from "../../utils/caloriesBurned";
import styles from "../../styles/globalStyles";

export default function CaloriesBurnedScreen({navigation}){

 const[m,setM]=useState("");
 const[w,setW]=useState("");
 const[t,setT]=useState("");
 const[r,setR]=useState(null);

 const calculate=()=>{
  const val=caloriesBurned(+m,+w,+t);

  let color="#2ecc71";
  if(val<100) color="#3498db";
  else if(val>500) color="#e67e22";

  setR({value:val.toFixed(0),color});
 };

 return(
 <View style={styles.screen}>
  <Text style={styles.title}>Calories Burned</Text>

  <TextInput style={styles.input} placeholder="MET value" keyboardType="numeric" onChangeText={setM}/>
  <TextInput style={styles.input} placeholder="Weight kg" keyboardType="numeric" onChangeText={setW}/>
  <TextInput style={styles.input} placeholder="Minutes" keyboardType="numeric" onChangeText={setT}/>

  <Button title="Calculate" onPress={calculate}/>
  {r && <Text style={[styles.result,{color:r.color}]}>{r.value} kcal</Text>}

  <Button title="Back" onPress={()=>navigation.goBack()}/>
 </View>
 );
}

import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { bmi } from "../../utils/bmi";
import styles from "../../styles/globalStyles";

export default function BMIScreen({ navigation }) {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#000");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const value = bmi(Number(weight), Number(height));
    const v = value.toFixed(2);

    let cat = "";
    let col = "";

    if (value < 18.5) {
      cat = "Underweight";
      col = "#3498db";
    } else if (value < 25) {
      cat = "Normal";
      col = "#2ecc71";
    } else if (value < 30) {
      cat = "Overweight";
      col = "#f39c12";
    } else {
      cat = "Obese";
      col = "#e74c3c";
    }

    setResult(v);
    setCategory(cat);
    setColor(col);
  };

  return (
    <View style={styles.screen}>

      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calculate" onPress={calculateBMI} />

      {result && (
        <Text style={[styles.result, { color }]}>
          BMI: {result} ({category})
        </Text>
      )}

      <Button title="Back" onPress={() => navigation.goBack()} />

    </View>
  );
}

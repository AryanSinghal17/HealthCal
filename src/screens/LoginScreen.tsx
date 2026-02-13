import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { generateOtp } from "../services/otpManager";
import { logEvent } from "../services/analytics";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");

  const handleSendOtp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid .com email");
      return;
    }

    const otp = generateOtp(email);
    console.log("Generated OTP:", otp);

    await logEvent("OTP Generated");
    navigation.navigate("OTP", { email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
          <Text style={styles.buttonText}>SEND OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 16,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2979FF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

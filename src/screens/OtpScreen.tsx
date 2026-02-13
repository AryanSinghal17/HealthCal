import React, { useEffect, useRef, useState } from "react";
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
import { validateOtp, generateOtp } from "../services/otpManager";
import { logEvent } from "../services/analytics";

type Props = NativeStackScreenProps<RootStackParamList, "OTP">;

export default function OtpScreen({ route, navigation }: Props) {
  const { email } = route.params;
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setTimeLeft(60);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleValidate = async () => {
    if (!otp) {
      Alert.alert("Error", "Please enter OTP");
      return;
    }

    const result = validateOtp(email, otp);

    if (result.success === true) {
      await logEvent("OTP Success");
      navigation.replace("Session", { email });
    } else {
      await logEvent("OTP Failure");
      Alert.alert(result.message ?? "Something went wrong");
    }
  };

  const handleResend = async () => {
    const newOtp = generateOtp(email);
    console.log("Resent OTP:", newOtp);

    await logEvent("OTP Resent");

    startTimer(); // restart timer
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.timer}>Time Left: {timeLeft}s</Text>

        <TextInput
          placeholder="Enter OTP"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        <TouchableOpacity style={styles.button} onPress={handleValidate}>
          <Text style={styles.buttonText}>VERIFY OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resend} onPress={handleResend}>
          <Text style={{ color: "#2979FF", fontWeight: "500" }}>
            Resend OTP
          </Text>
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
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  timer: {
    textAlign: "center",
    marginBottom: 20,
    color: "#2979FF",
    fontWeight: "500",
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
    marginBottom: 10,
  },
  resend: {
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

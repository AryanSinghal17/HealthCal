import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useSessionTimer } from "../hooks/useSessionTimer";
import { logEvent } from "../services/analytics";

type Props = NativeStackScreenProps<RootStackParamList, "Session">;

export default function SessionScreen({ route, navigation }: Props) {
  const { loginTime } = route.params;
  const duration = useSessionTimer();

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleLogout = async () => {
    await logEvent("Logout");
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Session Active</Text>

        <Text style={{ marginBottom: 10 }}>
          Login Time: {loginTime}
        </Text>

        <Text style={styles.duration}>
          {formatTime(duration)}
        </Text>

        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
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
    padding: 30,
    borderRadius: 16,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  duration: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },
  logout: {
    backgroundColor: "#E53935",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  logoutText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

export default function HomeScreen({ navigation }) {

  const items = [
    { label: "BMI", short: "BMI", screen: "BMI" },
    { label: "BMR", short: "BMR", screen: "BMR" },
    { label: "Body Fat", short: "BF", screen: "BodyFat" },
    { label: "Ideal Weight", short: "IW", screen: "IdealWeight" },
    { label: "Lean Mass", short: "LBM", screen: "LeanBodyMass" },
    { label: "Healthy", short: "HW", screen: "HealthyWeight" },
    { label: "Heart Rate", short: "HR", screen: "TargetHeartRate" },
    { label: "Calories", short: "CAL", screen: "CaloriesBurned" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HealthCal - Health Calculators</Text>


      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.screen}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.logo}>
              <Text style={styles.logoText}>{item.short}</Text>
            </View>

            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    padding: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#4A90E2",
  },

  card: {
    backgroundColor: "#E0F2FF",
    width: "48%",
    aspectRatio: 1,
    borderRadius: 18,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  logo: {
    backgroundColor: "#4A90E2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },

  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1B2A41",
    textAlign: "center",
  },

});

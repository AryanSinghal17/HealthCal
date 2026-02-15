import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    marginBottom: 20
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.accent
  },

  result: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    color: colors.primary,
    fontWeight: "600"
  },

  cardButton: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 14,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },

  cardText: {
    fontSize: 18,
    textAlign: "center",
    color: colors.text,
    fontWeight: "600"
  }

});

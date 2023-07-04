import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


function AppButton({ title,navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={ () => navigation.navigate("Home")}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FC6D3F",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

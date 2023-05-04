import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-social.webp")}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to the Menu screen!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Overview")}
      >
        <Text style={styles.buttonText}>View Persons</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Roles")}
      >
        <Text style={styles.buttonText}>View Roles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

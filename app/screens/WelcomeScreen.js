import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text>Welcome</Text>
      </View>
      <View style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#505168",
    width: 200,
    height: 50,
    bottom: 450,
    borderRadius: 70,
  },
  background: {
    backgroundColor: "#B3C0A4",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 170,
    alignItems: "center",
  },
});

export default WelcomeScreen;

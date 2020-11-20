import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Alert,
} from "react-native";

import AppButton from "../components/AppButton";

import styles from "../components/styles";

import { FontAwesome5 } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <FontAwesome5 name="dog" size={70} color="#eaefd3" />
        {/* <Image style={styles.logo} source={require("../assets/icon.png")} /> */}
        <Text style={styles.text}>Woof Woof</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Get Started"
          accessibilityLabel="Get Started"
          onPress={() => console.log("tapped!")}
        />
      </View>
    </View>
  );
}

export default WelcomeScreen;

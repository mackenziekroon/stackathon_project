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

function WelcomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Question");
  };

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <FontAwesome5 name="dog" size={70} color="#eaefd3" />
        <Text style={styles.text}>Woof Woof</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Get Started"
          accessibilityLabel="Get Started"
          onPress={pressHandler}
        />
      </View>
    </View>
  );
}

export default WelcomeScreen;

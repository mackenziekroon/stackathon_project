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
import QuestionScreen from "../screens/QuestionScreen";
import AppButton from "../components/AppButton";

import styles from "../components/styles";

function FinalScoreScreen(props) {
  const pressHandler = () => {
    props.navigation.navigate("Home");
  };

  // const { score } = route.params;
  console.log(props);
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.text}>Final Score: ...</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Play Again" onPress={pressHandler} />
      </View>
    </View>
  );
}

export default FinalScoreScreen;

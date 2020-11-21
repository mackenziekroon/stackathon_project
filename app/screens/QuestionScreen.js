import React from "react";
import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, View, Image, Text, Alert } from "react-native";
import AppButton from "../components/AppButton";

function QuestionScreen(props) {
  const answerValidation = (answer) => {
    let correctAnswer = "husky";
    if (answer === correctAnswer) {
      Alert.alert("Correct!");
    } else {
      Alert.alert("Try again...");
    }
  };

  return (
    <View style={styles.background}>
      <ProgressBar
        progress={0.1}
        width={375}
        color={"#505168"}
        style={styles.progress}
      />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/husky.png")} />
        <Text style={styles.font}>Guess the breed...</Text>
      </View>
      {/* <View style={styles.answersContainer}> */}
      <View style={styles.answerOne}>
        <AppButton
          title="husky"
          // accessibilityLabel="husky"
          onPress={() => answerValidation("husky")}
        />
      </View>
      <View style={styles.answerTwo}>
        <AppButton
          title="german shepherd"
          // accessibilityLabel="husky"
          onPress={() => answerValidation("german shepherd")}
        />
      </View>
      <View style={styles.answerThree}>
        <AppButton
          title="beagle"
          // accessibilityLabel="Answer Three"
          onPress={() => answerValidation("beagle")}
        />
      </View>
      <View style={styles.answerFour}>
        <AppButton
          title="corgi"
          // accessibilityLabel="Answer Four"
          onPress={() => answerValidation("corgi")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#eaefd3",
    flex: 1,
  },
  image: {
    padding: 20,
    top: 130,
  },
  // imageContainer: {
  //   backgroundColor: "#eaefd3",
  //   borderRadius: 25,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  //   top: 100,
  // },
  font: {
    justifyContent: "center",
    alignItems: "center",
    top: 160,
    textDecorationColor: "#505168",
    fontSize: 20,
  },
  progress: {
    top: 30,
  },
  answerOne: {
    // padding: 20,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 180,
    margin: 10,
  },
  answerTwo: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 190,
    margin: 10,
  },
  answerThree: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 200,
    margin: 10,
  },
  answerFour: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 210,
    margin: 10,
  },
});

export default QuestionScreen;

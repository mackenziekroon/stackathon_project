import React from "react";

import { StyleSheet, View, Image, Text, Button } from "react-native";
// import AppButton from "../components/AppButton";

function QuestionScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/husky.png")} />
        <Text style={styles.font}>Guess the breed...</Text>
      </View>
      <View style={styles.answersContainer}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.answerOne}
            title="Answer One"
            accessibilityLabel="Answer One"
            onPress={() => console.log("1")}
          />
        </View>
        {/* <Button style={styles.answerOne}>Answer 1</Button>
        <Button style={styles.answerTwo}>Answer 2</Button>
        <Button style={styles.answerThree}>Answer 3</Button>
        <Button style={styles.answerFour}>Answer 4</Button> */}
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
    padding: 25,
    top: 150,
  },
  imageContainer: {
    backgroundColor: "#b3c0a4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  font: {
    justifyContent: "center",
    alignItems: "center",
    top: 175,
    textDecorationColor: "#505168",
    fontSize: 20,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 430,
  },
  answerOne: {
    backgroundColor: "#505168",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
});

export default QuestionScreen;

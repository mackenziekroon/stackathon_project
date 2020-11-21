import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function QuestionScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/husky.png")} />
        <Text style={styles.font}>Guess the breed...</Text>
      </View>
      {/* <View style={styles.answersContainer}> */}
      <View style={styles.answerOne}>
        <AppButton
          title="Answer One"
          accessibilityLabel="Answer One"
          onPress={() => console.log("1")}
        />
      </View>
      <View style={styles.answerTwo}>
        <AppButton
          title="Answer Two"
          accessibilityLabel="Answer Two"
          onPress={() => console.log("2")}
        />
      </View>
      <View style={styles.answerThree}>
        <AppButton
          title="Answer Three"
          accessibilityLabel="Answer Three"
          onPress={() => console.log("3")}
        />
      </View>
      <View style={styles.answerFour}>
        <AppButton
          title="Answer Four"
          accessibilityLabel="Answer Four"
          onPress={() => console.log("4")}
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
  answerOne: {
    // padding: 20,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 220,
    margin: 10,
  },
  answerTwo: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 230,
    margin: 10,
  },
  answerThree: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 240,
    margin: 10,
  },
  answerFour: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 250,
    margin: 10,
  },
});

export default QuestionScreen;

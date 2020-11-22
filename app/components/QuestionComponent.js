import React from "react";

import { StyleSheet, View, Image, Text, Alert, FlatList } from "react-native";
import AppButton from "../components/AppButton";

function QuestionComponent({
  question,
  image,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  correctAnswer,
}) {
  // const answerValidation = (answer) => {
  //   let correct = correctAnswer;
  //   if (answer === correct) {
  //     Alert.alert("Correct!");
  //     this.setState({
  //       score: this.score + 1,
  //       currentQuestionIdx: this.currentQuestionIdx + 1,
  //       progressBar: this.progressBar + 0.1,
  //     });
  //   } else {
  //     Alert.alert("Sorry, wrong answer...");
  //     this.setState({
  //       currentQuestionIdx: this.currentQuestionIdx + 1,
  //       progressBar: this.progressBar + 0.1,
  //     });
  //   }
  // };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, top: 100 }}
        />

        <Text style={styles.font}>{question}</Text>
      </View>
      <View style={styles.answerOne}>
        <AppButton
          title={answerOne}
          onPress={() => this.answerValidation(answerOne)}
        />
      </View>
      <View style={styles.answerTwo}>
        <AppButton
          title={answerTwo}
          onPress={() => this.answerValidation(answerTwo)}
        />
      </View>
      <View style={styles.answerThree}>
        <AppButton
          title={answerThree}
          onPress={() => this.answerValidation(answerThree)}
        />
      </View>
      <View style={styles.answerFour}>
        <AppButton
          title={answerFour}
          onPress={() => this.answerValidation(answerFour)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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

export default QuestionComponent;

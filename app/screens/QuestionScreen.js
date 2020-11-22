import React from "react";
import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, View, Image, Text, Alert } from "react-native";
import AppButton from "../components/AppButton";
import questionsApi from "../../server/api/fetchingData";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentQuestionIdx: 0,
      progressBar: 0.1,
      questions: [],
      currentQuestion: {},
    };
    this.answerValidation = this.answerValidation.bind(this);
  }

  async componentDidMount() {
    const { data } = await questionsApi.getQuestions();
    // console.log("DATA", data);

    this.setState({
      questions: data,
      currentQuestion: data[this.state.currentQuestionIdx],
    });
    console.log("current question", this.state.currentQuestion);
  }

  answerValidation(answer) {
    let correctAnswer = "husky";
    if (answer === correctAnswer) {
      Alert.alert("Correct!");
      this.setState({
        score: this.state.score + 1,
        currentQuestionIdx: this.state.currentQuestionIdx + 1,
        progressBar: this.state.progressBar + 0.1,
      });
      console.log(this.state);
    } else {
      Alert.alert("Try again...");
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <ProgressBar
          progress={this.state.progressBar}
          width={375}
          color={"#505168"}
          style={styles.progress}
        />
        <Text>Score: {this.state.score}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/husky.png")} />
          {/* <Text style={styles.font}>{this.state.questions[0].question}</Text> */}
        </View>
        {/* <View style={styles.answersContainer}> */}
        <View style={styles.answerOne}>
          <AppButton
            title="husky"
            // accessibilityLabel="husky"
            onPress={() => this.answerValidation("husky")}
          />
        </View>
        <View style={styles.answerTwo}>
          <AppButton
            title="german shepherd"
            // accessibilityLabel="husky"
            onPress={() => this.answerValidation("german shepherd")}
          />
        </View>
        <View style={styles.answerThree}>
          <AppButton
            title="beagle"
            // accessibilityLabel="Answer Three"
            onPress={() => this.answerValidation("beagle")}
          />
        </View>
        <View style={styles.answerFour}>
          <AppButton
            title="corgi"
            // accessibilityLabel="Answer Four"
            onPress={() => this.answerValidation("corgi")}
          />
        </View>
      </View>
    );
  }
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

import React from "react";
import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, View, Image, Text, Alert, FlatList } from "react-native";
import questionsApi from "../../server/api/fetchingData";
import QuestionComponent from "../components/QuestionComponent";

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
    console.log(data);
    this.setState({
      questions: data,
      currentQuestion: [data[this.state.currentQuestionIdx]],
    });
  }

  answerValidation(answer) {
    let correct = correctAnswer;
    if (answer === correct) {
      Alert.alert("Correct!");
      this.setState({
        score: this.state.score + 1,
        currentQuestionIdx: this.state.currentQuestionIdx + 1,
        progressBar: this.state.progressBar + 0.1,
      });
    } else {
      Alert.alert("Sorry, wrong answer...");
      this.setState({
        currentQuestionIdx: this.state.currentQuestionIdx + 1,
        progressBar: this.state.progressBar + 0.1,
      });
    }
  }

  render() {
    let question = this.state.currentQuestion;
    return (
      <View style={styles.background}>
        <ProgressBar
          progress={this.state.progressBar}
          width={375}
          color={"#505168"}
          style={styles.progress}
        />
        <Text>Score: {this.state.score}</Text>

        <FlatList
          data={question}
          keyExtractor={(question) => question.id.toString()}
          renderItem={({ item }) => (
            <QuestionComponent
              question={item.question}
              image={item.image}
              answerOne={item.answerOne}
              answerTwo={item.answerTwo}
              answerThree={item.answerThree}
              answerFour={item.answerFour}
              correctAnswer={item.correctAnswer}
            />
          )}
        />
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
});

export default QuestionScreen;

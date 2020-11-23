import React from "react";
import ProgressBar from "react-native-progress/Bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  FlatList,
  Button,
} from "react-native";
import questionsApi from "../../server/api/fetchingData";
import AppButton from "../components/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentQuestionIdx: 0,
      progressBar: 0,
      questions: [],
      currentQuestion: [],
    };
    this.answerValidation = this.answerValidation.bind(this);
    this.navigationHandler = this.navigationHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await questionsApi.getQuestions();
    this.setState({
      questions: data,
      currentQuestion: [data[this.state.currentQuestionIdx]],
    });
  }

  navigationHandler = () => {
    let score = this.state.score;
    this.props.navigation.navigate("Score", score);
  };

  answerValidation(answer, correctAnswer) {
    if (answer === correctAnswer) {
      Alert.alert("Correct!");

      this.setState({
        score: this.state.score + 1,
        currentQuestionIdx: this.state.currentQuestionIdx + 1,
        progressBar: this.state.progressBar + 0.1,
        currentQuestion: [
          this.state.questions[this.state.currentQuestionIdx + 1],
        ],
      });
    } else {
      Alert.alert("Sorry, wrong answer...");

      this.setState({
        currentQuestionIdx: this.state.currentQuestionIdx + 1,
        progressBar: this.state.progressBar + 0.1,
        currentQuestion: [
          this.state.questions[this.state.currentQuestionIdx + 1],
        ],
      });
    }
  }

  render() {
    console.log(this.state.currentQuestionIdx);
    let question = this.state.currentQuestion;

    return (
      <View style={styles.background}>
        <ProgressBar
          progress={this.state.progressBar}
          width={375}
          color={"#505168"}
          style={styles.progress}
        />
        <Text style={styles.score}>Score: {this.state.score}</Text>
        <Text style={styles.questionProgress}>
          {this.state.currentQuestionIdx + 1}/10
        </Text>
        <Button
          title="complete"
          onPress={this.navigationHandler}
          style={styles.completeButton}
          color="#505168"
        />

        <FlatList
          data={question}
          keyExtractor={(question) => question.id.toString()}
          renderItem={({ item }) => (
            <>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 200, top: 100 }}
                />

                <Text style={styles.font}>{item.question}</Text>
              </View>
              <View style={styles.answerOne}>
                <AppButton
                  title={item.answerOne}
                  onPress={() =>
                    this.answerValidation(item.answerOne, item.correctAnswer)
                  }
                />
              </View>
              <View style={styles.answerTwo}>
                <AppButton
                  title={item.answerTwo}
                  onPress={() =>
                    this.answerValidation(item.answerTwo, item.correctAnswer)
                  }
                />
              </View>
              <View style={styles.answerThree}>
                <AppButton
                  title={item.answerThree}
                  onPress={() =>
                    this.answerValidation(item.answerThree, item.correctAnswer)
                  }
                />
              </View>
              <View style={styles.answerFour}>
                <AppButton
                  title={item.answerFour}
                  onPress={() =>
                    this.answerValidation(item.answerFour, item.correctAnswer)
                  }
                />
              </View>
            </>
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
    top: 100,
  },
  font: {
    justifyContent: "center",
    alignItems: "center",
    top: 130,
    textDecorationColor: "#505168",
    fontSize: 20,
  },
  progress: {
    left: 20,
    top: 30,
    width: "90%",
  },
  answerOne: {
    // padding: 20,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 150,
    margin: 10,
  },
  answerTwo: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 160,
    margin: 10,
  },
  answerThree: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 170,
    margin: 10,
  },
  answerFour: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    top: 180,
    margin: 10,
  },
  questionProgress: {
    left: 350,
    top: 70,
  },
  completeButton: {
    left: 350,
    top: 70,
  },
  score: {
    top: 70,
    left: 10,
  },
});

export default QuestionScreen;

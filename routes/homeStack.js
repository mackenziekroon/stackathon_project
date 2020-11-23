import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import QuestionScreen from "../app/screens/QuestionScreen";
import FinalScoreScreen from "../app/screens/FinalScoreScreen";
import { FontAwesome5 } from "@expo/vector-icons";

const screens = {
  Home: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: " ",
      headerStyle: {
        backgroundColor: "#b3c0a4",
      },
    },
  },
  Question: {
    screen: QuestionScreen,
    navigationOptions: {
      title: <FontAwesome5 name="dog" size={40} color="#505168" />,
      headerStyle: {
        backgroundColor: "#eaefd3",
      },
    },
  },
  Score: {
    screen: FinalScoreScreen,
    navigationOptions: {
      title: " ",
      headerStyle: {
        backgroundColor: "#b3c0a4",
      },
    },
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);

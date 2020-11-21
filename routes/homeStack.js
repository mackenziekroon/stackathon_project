import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import QuestionScreen from "../app/screens/QuestionScreen";

const screens = {
  Home: {
    screen: WelcomeScreen,
  },
  Question: {
    screen: QuestionScreen,
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);

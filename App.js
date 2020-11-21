import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Text,
  View,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import QuestionScreen from "./app/screens/QuestionScreen";

import Navigator from "./routes/homeStack";

export default function App() {
  // return <WelcomeScreen />;
  return <Navigator />;
}

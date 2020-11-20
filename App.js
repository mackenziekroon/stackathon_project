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
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import QuestionScreen from "./app/screens/QuestionScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <QuestionScreen />;
}

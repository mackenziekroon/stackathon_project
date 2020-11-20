import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#505168",
    width: 200,
    height: 50,
    bottom: 450,
    borderRadius: 70,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 430,
  },
  background: {
    backgroundColor: "#B3C0A4",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 170,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Verdana",
    color: "#27233a",
  },
});

export default styles;

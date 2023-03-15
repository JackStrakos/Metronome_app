import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Metronome from "./Components/Metronome.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Metronome />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Pointer from "./Components/Pointer.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Pointer />
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

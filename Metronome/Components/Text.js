import { Button, StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <>
      <View style={styles.titleText}>
        <Text style={styles.title}>We are workin on the motronome apps!</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Clap 1" />
      </View>
      <View style={styles.buttons}>
        <Button title="Clap 2" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    padding: 5,
    backgroundColor: "#8a8aeb",
  },
  title: {
    fontWeight: "bold",
  },
  buttons: {
    marginTop: 5,
    backgroundColor: "#FFF",
    width: "50%",
  },
});

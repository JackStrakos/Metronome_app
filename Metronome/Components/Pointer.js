import { Button, StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <>
      <View style={styles.pointerCoolio}>
        <View style={styles.startPointer}></View>
        <View style={styles.pointerHolder}>
          <View style={styles.pointer}></View>
        </View>
        <View style={styles.endPointer}></View>
      </View>

      <View style={styles.buttons}>
        <Button title="Clap 1" />
      </View>
      <View style={styles.buttons}>
        <Button title="Clap 2" />
      </View>
      <View style={styles.titleText}>
        <Text style={styles.title}>We are workin on the motronome apps!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    padding: 5,
    backgroundColor: "#8a8aeb",
    margin: 10,
  },
  title: {
    fontWeight: "bold",
  },
  buttons: {
    marginTop: 5,
    backgroundColor: "#FFF",
    width: "50%",
  },
  pointerCoolio: {
    width: "80%",
    height: "2%",
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  pointerHolder: {
    marginBottom: 5,
    height: "100%",
    width: "98%",
  },
  startPointer: {
    width: "1%",
    height: "100%",
    backgroundColor: "#000",
  },
  endPointer: {
    width: "1%",
    height: "100%",
    backgroundColor: "#000",
  },
  pointer: {
    height: "100%",
    aspectRatio: 1 / 1,
    backgroundColor: "#ad1d49",
    borderRadius: 20,
  },
});

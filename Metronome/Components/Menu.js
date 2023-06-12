import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import { Button } from "react-native-web";
import Metronome from "./Metronome";

export default function Menu({ navigation }) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <View style={styles.coolio}>
        <TouchableHighlight style={styles.menuItem} onPress={() => navigation.navigate(Metronome)}>
          <View style={styles.secondLayerBorder}>
            <Text style={styles.menuItemText}>Metronome</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuItem}>
          <View style={styles.secondLayerBorder}>
            <Text style={styles.menuItemText}>Rhytm exercise</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.menuItem}>
          <View style={styles.secondLayerBorder}>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  coolio: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    height: "7%",
    width: "60%",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 80,
    borderColor: "blue",
    marginTop: 8,
  },
  secondLayerBorder: {
    width: "97%",
    height: "95%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "purple",
  },
  menuItemText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

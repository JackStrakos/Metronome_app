import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import { Button } from "react-native-web";

export default function Menu() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <View>
        <TouchableHighlight /* style={styles.titleText} onPress={toggleMetronome} */>
          <Text /* style={styles.title} */>Metronome</Text>
        </TouchableHighlight>
        <TouchableHighlight /* style={styles.titleText} onPress={toggleMetronome} */>
          <Text /* style={styles.title} */>Rhytm exercise</Text>
        </TouchableHighlight>
        <TouchableHighlight /* style={styles.titleText} onPress={toggleMetronome} */>
          <Text /* style={styles.title} */>Settings</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

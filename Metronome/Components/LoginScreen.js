import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";

export default function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <View>
        <Text>Learn the music</Text>
      </View>
      <View /* style={styles.loginHolder} */>
        <TextInput
          //   style={styles.userName}
          onChangeText={(name) => setUserName(name)}
          placeholder={"Username"}
        />
        <TextInput
          //   style={styles.password}
          onChangeText={(password) => setPassword(password)}
          placeholder={"Password"}
        />
      </View>
      <TouchableHighlight /* style={styles.titleText} onPress={toggleMetronome} */>
        <Text /* style={styles.title} */>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight /* style={styles.titleText} onPress={toggleMetronome} */>
        <Text /* style={styles.title} */>Sign up</Text>
      </TouchableHighlight>
    </>
  );
}

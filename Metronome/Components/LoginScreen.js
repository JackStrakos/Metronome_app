import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import Menu from "./Menu";

export default function Login({ navigation }) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <>
      <View /* style={styles.title} */>
        <Text style={styles.title}>Learn the music</Text>
      </View>
      <View style={styles.coolio}>
        <View style={styles.loginHolder}>
          <TextInput
            style={styles.userName}
            onChangeText={(name) => setUserName(name)}
            placeholder={"Username"}
          />
          <TextInput
            style={styles.password}
            onChangeText={(password) => setPassword(password)}
            placeholder={"Password"}
          />
        </View>
        <View style={styles.buttonsCoolio}>
          <TouchableHighlight
            style={styles.loginScreenButtons}
            onPress={() => navigation.navigate(Menu)}
          >
            <View style={styles.secondLayerLogin}>
              <Text style={styles.loginScreenText}>Login</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.loginScreenButtons}>
            <View style={styles.secondLayerLogin}>
              <Text style={styles.loginScreenText}>Sign up</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  coolio: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    paddingTop: "10%",
    paddingLeft: "25%",
    paddingBottom: "5%",
    paddingRight: "5%",
    backgroundColor: "#fad56e",
  },
  loginHolder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "40%",
    marginTop: "50%",
    borderWidth: 1,
    borderRadius: 70,
    borderColor: "black",
  },
  buttonsCoolio: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  loginScreenButtons: {
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
  secondLayerLogin: {
    width: "97%",
    height: "95%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "purple",
  },
  loginScreenText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

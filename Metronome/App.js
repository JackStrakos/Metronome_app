import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Metronome from "./Components/Metronome.js";
import Login from "./Components/LoginScreen.js";
import Menu from "./Components/Menu.js";
import { SafeAreaView } from "moti";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* SafeAreaView supported only for IOS */}
      {/* <SafeAreaView style={styles.container}> */}
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Metronome" component={Metronome} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
}

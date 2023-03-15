import { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableHighlight,
  Easing,
} from "react-native";

export default function Metronome() {
  let BPM = 2000;
  const [metronomInicializator, setMetronomeInicializator] = useState(false);
  let rotateValueHolder = new Animated.Value(0);

  const startMetronome = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: BPM,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startMetronome());
  };

  const runMetronome = () => {
    setMetronomeInicializator(!metronomInicializator);
  };

  useEffect(() => {
    if (metronomInicializator) {
      startMetronome();
    }
  }, [metronomInicializator]);

  const RotatePointer = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["-45deg", "45deg"],
  });

  return (
    <>
      <>
        <View style={styles.pointerCoolio}>
          <Animated.View style={[styles.pointerFlex, { transform: [{ rotate: RotatePointer }] }]}>
            <Image style={styles.pointer} source={require("../assets/pointer.png")} />
          </Animated.View>
        </View>
        <TouchableHighlight style={styles.titleText} onPress={runMetronome}>
          <Text style={styles.title}>We are workin on the motronome app!</Text>
        </TouchableHighlight>
      </>
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
  pointerCoolio: {
    width: 50,
    height: 250,
  },
  pointerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pointer: {
    width: 20,
    height: "65%",
  },
});

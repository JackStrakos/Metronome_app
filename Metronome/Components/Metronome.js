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
  let BPM = 3000;
  let rotation = false;
  const [metronomInicializator, setMetronomeInicializator] = useState(false);
  const [startingPos, setStartingPos] = useState(false);
  let rotateValueHolder = new Animated.Value(0);

  const startMetronome = () => {
    let continuingPos;
    let endingPos;
    // here by ! i can change position of the starting TIK
    if (rotation) {
      continuingPos = 1;
      endingPos = 0;
      rotation = !rotation;
    } else {
      continuingPos = 0;
      endingPos = 1;
      rotation = !rotation;
    }

    rotateValueHolder.setValue(continuingPos);
    Animated.timing(rotateValueHolder, {
      toValue: endingPos,
      duration: BPM,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startMetronome());
  };

  // start and stop the metronome
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
    outputRange: ["-35deg", "35deg"],
  });

  return (
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
    height: 300,
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

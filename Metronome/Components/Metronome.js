import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableHighlight,
  Easing,
  TextInput,
} from "react-native";

export default function Metronome() {
  const [metronomInicializator, setMetronomeInicializator] = useState(false);
  const [pointerPosition, setPointerPosition] = useState(0);
  const [tik, setTik] = useState(1);
  const [BPM, setBPM] = useState(120);

  let rotation = false;
  const rotateValueHolder = useRef(new Animated.Value(0)).current;
  const animation = useRef(null);

  // MAYBE SWITCHING BETWEEN ANIMATIONS => ONE ANIMATION FOR RUNNING AND ONE FOR GETTING BACK TO DEFAULT POSE ???
  // const standByMetronom = () => {
  //   rotateValueHolder.setValue(0);
  //   console.log("standBy");
  // };

  const startMetronome = () => {
    let continuingPos;
    let endingPos;
    // here by ! i can change position of the starting TIK
    if (rotation) {
      continuingPos = 1;
      endingPos = 0;
    } else {
      continuingPos = 0;
      endingPos = 1;
    }
    rotation = !rotation;
    rotateValueHolder.setValue(continuingPos);
    animation.current = Animated.timing(rotateValueHolder, {
      toValue: endingPos,
      duration: 60000 / BPM,
      easing: Easing.linear,
      useNativeDriver: false,
      loop: false,
    });
    if (metronomInicializator) {
      animation.current.start(() => {
        setTik((prev) => prev + 1);
        startMetronome();
      });
    } else {
      stopMetronome();
    }
  };

  const stopMetronome = () => {
    animation.current.stop();
  };

  // start and stop the metronome
  const runMetronome = () => {
    setMetronomeInicializator(!metronomInicializator);
  };

  useEffect(() => {
    if (metronomInicializator) {
      startMetronome();
    } /* else if (!metronomInicializator) {
      standByMetronom();
    } */
  }, [metronomInicializator]);

  const RotatePointer = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["-35deg", "35deg"],
  });

  RotatePointer.addListener(({ value }) => {
    setPointerPosition(value);
  });

  if (pointerPosition === -35) {
    console.log("-35");
  } else if (pointerPosition === 35) {
    console.log("35");
  }

  return (
    <>
      <View style={styles.BPMLabel}>
        <Text style={styles.BMP}>BPM: </Text>
        <TextInput
          style={styles.BMP}
          onChangeText={(text) => setBPM(text)}
          value={BPM}
          keyboardType="numeric"
          placeholder="120"
        />
      </View>
      <View style={styles.pointerCoolio}>
        <Animated.View style={[styles.pointerFlex, { transform: [{ rotate: RotatePointer }] }]}>
          <Image style={styles.pointer} source={require("../assets/pointer.png")} />
        </Animated.View>
      </View>
      <Text style={styles.pong}>{tik}</Text>
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
  pong: {
    backgroundColor: "green",
  },
  BPMLabel: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  BPM: {
    height: "10%",
    width: "20%",
  },
});

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
import { log } from "react-native-reanimated";

export default function Metronome() {
  const [metronomInicializator, setMetronomeInicializator] = useState(false);
  const [pointerPosition, setPointerPosition] = useState(0);
  const [tik, setTik] = useState(1);
  const [BPM, setBPM] = useState(120);
  const [periodFrom, setPeriodFrom] = useState(4);
  const [period, setPeriod] = useState(4);

  let rotation = false;
  let periodSignal = false;
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
      loop: alse,
    });
    animation.current.start(() => {
      if (metronomInicializator) {
        startMetronome();
      }
      setTik((prev) => prev + 1);
      if (tik % period == 0) {
        periodSignal = !periodSignal;
      } else {
        periodSignal = !periodSignal;
      }
      // console.log("spoustim");
      // startMetronome();
    });

    // console.log("vypinam tvoji mamu");
    // rotateValueHolder.setValue(0);
    // Animated.timing(rotateValueHolder).stop();

    // animation.current.stop();
    // stopMetronome();
  };

  // const stopMetronome = () => {
  //   animation.current.stop();
  // };

  // start and stop the metronome
  const toggleMetronome = () => {
    // console.log(metronomInicializator);
    setMetronomeInicializator(!metronomInicializator);
  };

  useEffect(() => {
    console.log(metronomInicializator);
    startMetronome();
    /* else if (!metronomInicializator) {
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
      <View style={styles.setMetronome}>
        <View style={styles.periodHolder}>
          <Text style={styles.period}>Period: </Text>
          <TextInput
            style={styles.period}
            onChangeText={(text) => setPeriod(text)}
            value={period}
            keyboardType="numeric"
            placeholder={period}
          />
          <Text style={styles.period}> / </Text>
          <TextInput
            style={styles.period}
            onChangeText={(text) => setPeriodFrom(text)}
            value={periodFrom}
            keyboardType="numeric"
            placeholder={periodFrom}
          />
        </View>
        <View style={styles.BPMLabel}>
          <Text style={styles.BMP}>BPM: </Text>
          <TextInput
            style={styles.BMP}
            onChangeText={(text) => setBPM(text)}
            value={BPM}
            keyboardType="numeric"
            placeholder={BPM}
          />
        </View>
      </View>
      <View style={styles.pointerCoolio}>
        <Animated.View style={[styles.pointerFlex, { transform: [{ rotate: RotatePointer }] }]}>
          <Image style={styles.pointer} source={require("../assets/pointer.png")} />
          <View style={styles.periodSignal}></View>
        </Animated.View>
      </View>
      <Text style={styles.pong}>{tik}</Text>
      <TouchableHighlight style={styles.titleText} onPress={toggleMetronome}>
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
  setMetronome: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  periodHolder: {
    flex: 4,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  periodSignal: {
    width: "40%",
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: "50%",
    borderWidth: 5,
    borderColor: "red",
  },
});

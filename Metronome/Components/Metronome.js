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
  const [tik, setTik] = useState(0);
  const [BPM, setBPM] = useState(120);
  const [periodFrom, setPeriodFrom] = useState(4);
  const [period, setPeriod] = useState(4);
  const [pointerPosition, setPointerPosition] = useState(null);

  let periodSignal = false;
  const rotateValueHolder = useRef(new Animated.Value(0.5)).current;


   const arr = [0,0.5,1,0.5]
  const startMetronome = () => {
    Animated.sequence([
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 60000 / BPM,
        easing: Easing.linear,
        useNativeDriver: false,
        loop: false,
      }),
      Animated.timing(rotateValueHolder, {
        toValue: 0.5,
        duration: 60000 / BPM,
        easing: Easing.linear,
        useNativeDriver: false,
        loop: false,
      }),
      Animated.timing(rotateValueHolder, {
        toValue: 0,
        duration: 60000 / BPM,
        easing: Easing.linear,
        useNativeDriver: false,
        loop: false,
      }),
      Animated.timing(rotateValueHolder, {
        toValue: 0.5,
        duration: 60000 / BPM,
        easing: Easing.linear,
        useNativeDriver: false,
        loop: false,
      }),
    ]).start(() => {
      startMetronome();
    });
  };

  // start and stop the metronome
  const toggleMetronome = () => {
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

  // HERE IS THE POINK SOUND SOLUTION
  // RotatePointer.addListener(({ value }) => {
  //   setPointerPosition(value);
  // });

  // if (pointerPosition === -35) {
  //   console.log("-35");
  // } else if (pointerPosition === 35) {
  //   console.log("35");
  // }

  return (
    <>
      <View style={styles.coolio}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  coolio: {
    flex: 1,
    backgroundColor: "#BBB",
    alignItems: "center",
    justifyContent: "center",
  },
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

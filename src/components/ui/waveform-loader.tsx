import { Colors } from "@/constants/theme";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

const BAR_COUNT = 5;

const WaveformLoader = ({ color = Colors.primary, size = 40 }) => {
  const animations = useRef(
    Array.from({ length: BAR_COUNT }, () => new Animated.Value(0.3)),
  ).current;

  useEffect(() => {
    const createAnimation = (
      anim: Animated.Value,
      duration: number,
      delay: number,
    ) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1,
            duration: duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0.2,
            duration: duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      );
    };

    const animationLoop = Animated.parallel([
      createAnimation(animations[0], 450, 0),
      createAnimation(animations[1], 500, 150),
      createAnimation(animations[2], 400, 300),
      createAnimation(animations[3], 550, 100),
      createAnimation(animations[4], 480, 200),
    ]);

    animationLoop.start();

    return () => animationLoop.stop();
  }, [animations]);

  return (
    <View style={[styles.container, { height: size }]}>
      {animations.map((anim, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            {
              backgroundColor: color,
              height: size,
              transform: [{ scaleY: anim }],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  bar: {
    width: 5,
    borderRadius: 3,
  },
});

export default WaveformLoader;

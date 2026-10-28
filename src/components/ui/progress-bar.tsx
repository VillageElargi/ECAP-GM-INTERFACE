import { Colors } from "@/constants/theme";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

type AnimatedProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  activeColor?: string;
  trackColor?: string;
};

export default function AnimatedProgressBar({
  currentStep,
  totalSteps,
  activeColor = Colors.primary,
  trackColor = Colors.card_bg,
}: AnimatedProgressBarProps) {
  const progressPercent =
    totalSteps > 0 ? Math.min(Math.max(currentStep / totalSteps, 0), 1) : 0;

  const displayPercentage = Math.floor(progressPercent * 100);

  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progressPercent,
      duration: 450,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [progressPercent]);

  const widthInterpolation = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View
          style={[
            styles.fill,
            {
              backgroundColor: activeColor,
              width: widthInterpolation,
            },
          ]}
        />
      </View>

      <Text style={styles.percentageText}>{displayPercentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 6,
  },
  track: {
    height: 8,
    width: "100%",
    borderRadius: 999,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 999,
  },
  percentageText: {
    alignSelf: "flex-end",
    color: Colors.discrete_txt,
    fontSize: 13,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
  },
});

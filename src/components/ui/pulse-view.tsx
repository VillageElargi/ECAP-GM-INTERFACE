import { ReactNode, useEffect, useRef } from "react";
import { Animated } from "react-native";

interface PulseViewProps {
  style?: any;
  children: ReactNode;
}

export default function PulseView({ children, style }: PulseViewProps) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    );

    pulseAnimation.start();
    return () => pulseAnimation.stop();
  }, [opacity]);

  return <Animated.View style={[style, { opacity }]}>{children}</Animated.View>;
}

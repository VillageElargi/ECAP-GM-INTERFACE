import { BorderSize, Colors, RoundedSize } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  type?: "primary" | "danger";
  filled?: boolean;
  onPress: () => void;
}
const Button = ({
  title,
  type = "primary",
  filled = true,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        styles[`${type}_${filled ? "filled" : "unfilled"}`],
      ]}
      onPress={onPress}
    >
      <Text style={styles[`text_${type}_${filled ? "filled" : "unfilled"}`]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: BorderSize,
    borderRadius: RoundedSize,
  },
  danger_filled: {
    backgroundColor: Colors.red,
    borderColor: Colors.red,
  },
  danger_unfilled: {
    borderColor: Colors.red,
  },
  text_danger_filled: {
    color: Colors.main_txt,
  },
  text_danger_unfilled: {
    color: Colors.red,
  },

  primary_filled: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  primary_unfilled: {
    borderColor: Colors.primary,
  },
  text_primary_filled: {
    color: Colors.main_txt,
  },
  text_primary_unfilled: {
    color: Colors.primary,
  },
});

export default Button;

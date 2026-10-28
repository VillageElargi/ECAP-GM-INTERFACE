import { BorderSize, Colors, Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Aside = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: Colors.container_bg,
    borderRightWidth: BorderSize,
    borderRightColor: Colors.primary,
    flexDirection: "column",
    padding: Spacing.two,
  },
});

export default Aside;

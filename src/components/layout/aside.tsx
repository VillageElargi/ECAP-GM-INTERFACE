import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Aside = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: Colors.container_bg,
    borderRightWidth: 0.5,
    borderRightColor: Colors.primary,
    flexDirection: "column",
    padding: 10,
  },
});

export default Aside;

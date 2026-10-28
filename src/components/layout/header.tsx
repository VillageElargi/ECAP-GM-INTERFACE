import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Header = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.container_bg,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primary,
    padding: 10,
    paddingTop: 30,
  },
});

export default Header;

import { BorderSize, Colors, Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

const Header = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.container_bg,
    borderBottomWidth: BorderSize,
    borderBottomColor: Colors.primary,
    padding: Spacing.two,
    paddingTop: 30,
  },
});

export default Header;

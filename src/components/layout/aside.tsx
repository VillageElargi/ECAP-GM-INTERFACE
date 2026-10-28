import { BorderSize, Colors, Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import CaseCard from "../ui/case-card";
import Nav from "../ui/nav";

const Aside = () => {
  return (
    <View style={styles.container}>
      <CaseCard />
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: Colors.container_bg,
    borderRightWidth: BorderSize,
    borderRightColor: Colors.primary,
    flexDirection: "column",
    padding: Spacing.two,
    gap: Spacing.three,
  },
});

export default Aside;

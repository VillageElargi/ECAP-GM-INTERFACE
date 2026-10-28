import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import Aside from "./aside";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.appContainer}>
        <Aside />
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.main_bg,
    flexDirection: "column",
  },
  appContainer: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
});

export default Layout;

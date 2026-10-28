import Layout from "@/components/layout";
import ViewSelector from "@/components/view-selector";
import { AppProvider } from "@/context/AppProvider";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <AppProvider>
      <Layout>
        <ViewSelector />
      </Layout>
    </AppProvider>
  );
}

const styles = StyleSheet.create({});

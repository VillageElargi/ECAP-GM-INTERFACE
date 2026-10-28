import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const { t } = useTranslation();
  return <Text>{t("test")}</Text>;
}

const styles = StyleSheet.create({});

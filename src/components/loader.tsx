import { Colors, Spacing } from "@/constants/theme";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import WaveformLoader from "./ui/waveform-loader";

const Loader = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <WaveformLoader />
      <Text style={styles.title}>{t("starting_grs")}</Text>
      <Text style={styles.text}>{t("starting_grs_dsc")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: Spacing.three,
  },
  title: {
    color: Colors.main_txt,
    fontSize: 20,
  },
  text: {
    color: Colors.discrete_txt,
    textAlign: "center",
    maxWidth: 400,
  },
});

export default Loader;

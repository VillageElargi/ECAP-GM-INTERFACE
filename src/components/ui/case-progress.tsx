import { CASES } from "@/constants/cases";
import { Colors, Spacing } from "@/constants/theme";
import { useApp } from "@/context/useApp";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";

const CaseProgress = () => {
  const { t } = useTranslation();
  const { actualLevel, status, cases } = useApp();

  const currentCase = cases.find(
    (caseItem: (typeof CASES)[number]) => caseItem.id === actualLevel,
  );

  const entered =
    currentCase?.syncCodes.filter((code) => code.entered).length ?? 0;

  const total = currentCase?.syncCodes.length ?? 0;

  if (status === "searching" || status === "navigating")
    return <Text style={styles.step}>{t(`steps.${status}`)}</Text>;
  if (status == "preventing" && entered < total)
    return (
      <Text style={styles.step}>
        {t("steps.preventing")
          .replace(":entered", String(entered))
          .replace(":total", String(currentCase?.syncCodes.length))}
      </Text>
    );

  if (status == "preventing" && entered == total)
    return <Text style={styles.step}>{t("steps.convincing")}</Text>;

  return <Text style={styles.step}>{t("steps.no_infos")}</Text>;
};

const styles = StyleSheet.create({
  step: {
    marginTop: Spacing.three,
    color: Colors.discrete_txt,
    fontSize: 16,
  },
});

export default CaseProgress;

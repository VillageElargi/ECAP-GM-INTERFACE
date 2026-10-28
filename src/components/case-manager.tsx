import { CASES } from "@/constants/cases";
import { COMMANDS } from "@/constants/commands";
import { BorderSize, Colors, RoundedSize, Spacing } from "@/constants/theme";
import { useApp } from "@/context/useApp";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";

const COLUMNS = 3;
const GAP = Spacing.two;

const CaseManager = () => {
  const { t } = useTranslation();
  const [containerWidth, setContainerWidth] = useState(0);
  const { actualLevel, cases } = useApp();

  const horizontalInsets = Spacing.two * 2 + BorderSize * 2;
  const itemWidth =
    (containerWidth - horizontalInsets - GAP * (COLUMNS - 1)) / COLUMNS;

  const currentCase = cases.find(
    (caseItem: (typeof CASES)[number]) => caseItem.id === actualLevel,
  );

  return (
    <>
      <View style={[styles.container, styles.generalActions]}>{/* ... */}</View>

      <View
        style={[styles.container, styles.caseActions]}
        onLayout={(event) => setContainerWidth(event.nativeEvent.layout.width)}
      >
        {COMMANDS.map((command, i) => (
          <Pressable
            key={i}
            style={({ pressed }) => [
              styles.item,
              { width: itemWidth, borderColor: command.color },
              pressed && { backgroundColor: `${command.color}40` },
            ]}
          >
            <View style={styles.numberWrapper}>
              <View
                style={[styles.numberContainer, { borderColor: command.color }]}
              >
                <Text style={{ color: command.color }}>{command.number}</Text>
              </View>
            </View>
            <Text style={styles.icon}>{command.icon}</Text>
            <Text style={styles.title}>
              {t(`commands.${command.task}`).replace(
                ":case",
                `${t("case")} ${actualLevel}`,
              )}
            </Text>
            <Text style={styles.dsc}>{t(`commands.${command.task}_dsc`)}</Text>

            {currentCase && command.task == "fill" && (
              <View style={styles.synccodeContainer}>
                {currentCase.syncCodes.map((code) => (
                  <Text
                    style={[
                      styles.synccode,
                      { color: code.entered ? Colors.green : Colors.orange },
                    ]}
                  >
                    {code.code}
                  </Text>
                ))}
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.container_bg,
    padding: Spacing.two,
    borderWidth: BorderSize,
    borderColor: Colors.primary,
    borderRadius: RoundedSize,
  },
  generalActions: {
    flexDirection: "row",
  },
  caseActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
  },
  item: {
    borderRadius: RoundedSize,
    borderWidth: BorderSize,
    flexDirection: "column",
    alignItems: "center",
    gap: Spacing.two,
    height: "auto",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
  },
  numberWrapper: {
    width: "100%",
  },
  numberContainer: {
    width: 20,
    height: 20,
    borderWidth: BorderSize,
    borderRadius: 999,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 30,
  },
  title: {
    color: Colors.main_txt,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: 600,
    textAlign: "center",
  },
  dsc: {
    color: Colors.discrete_txt,
    fontSize: 12,
    fontWeight: 600,
    textAlign: "center",
  },
  synccodeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: Spacing.two,
    flexWrap: "wrap",
  },
  synccode: {
    color: Colors.main_txt,
    fontSize: 12,
    fontWeight: 600,
    textAlign: "center",
  },
});

export default CaseManager;

import { CASES } from "@/constants/cases";
import {
  BorderSize,
  Colors,
  RoundedSizeSmall,
  Spacing,
} from "@/constants/theme";
import { useApp } from "@/context/useApp";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PulseView from "./pulse-view";

const Nav = () => {
  const { t } = useTranslation();

  const { viewCase, setViewCase, actualLevel } = useApp();
  return (
    <View style={styles.container}>
      {CASES.map((caseItem, i) => (
        <Pressable
          key={i}
          onPress={() => setViewCase(caseItem.id)}
          style={[styles.link, viewCase == caseItem.id && styles.activeLink]}
        >
          <Text
            style={[
              styles.label,
              viewCase == caseItem.id && styles.activeLabel,
            ]}
          >
            {t("case")} {caseItem.id}
          </Text>
          <PulseView
            style={[
              styles.pulserContainer,
              caseItem.id < actualLevel
                ? styles.passedOP
                : caseItem.id == actualLevel
                  ? styles.actualOP
                  : styles.todoOP,
            ]}
          >
            <View
              style={[
                styles.pulserContent,
                caseItem.id < actualLevel
                  ? styles.passed
                  : caseItem.id == actualLevel
                    ? styles.actual
                    : styles.todo,
              ]}
            ></View>
          </PulseView>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: Spacing.two,
  },
  link: {
    width: "100%",
    borderRadius: RoundedSizeSmall,
    borderWidth: BorderSize,
    borderColor: Colors.primary,
    padding: Spacing.two,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: Colors.main_txt,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  status: {
    color: Colors.discrete_txt,
    fontSize: 10,
    paddingLeft: 20,
    textTransform: "lowercase",
  },
  activeLink: {
    backgroundColor: `${Colors.primary}40`,
  },
  activeLabel: {
    color: Colors.primary,
  },
  pulserContainer: {
    width: 15,
    height: 15,
    padding: Spacing.one,
    borderRadius: 999,
  },
  pulserContent: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
  },
  passedOP: { backgroundColor: `${Colors.green}30` },
  actualOP: { backgroundColor: `${Colors.orange}30` },
  todoOP: { backgroundColor: `${Colors.red}30` },
  passed: { backgroundColor: `${Colors.green}` },
  actual: { backgroundColor: `${Colors.orange}` },
  todo: { backgroundColor: `${Colors.red}` },
});

export default Nav;

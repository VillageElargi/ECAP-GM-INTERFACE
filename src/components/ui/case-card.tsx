import { CASES } from "@/constants/cases";
import { STEPS } from "@/constants/steps";
import {
  BorderSize,
  Colors,
  RoundedSizeSmall,
  Spacing,
} from "@/constants/theme";
import { useApp } from "@/context/useApp";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import CaseProgress from "./case-progress";
import AnimatedProgressBar from "./progress-bar";

const CaseCard = () => {
  const { t } = useTranslation();
  const { actualLevel, setActualLevel, cases, status } = useApp();

  const [steps, setSteps] = useState<string[]>([]);

  const currentCase = cases.find(
    (caseItem: (typeof CASES)[number]) => caseItem.id === actualLevel,
  );

  useEffect(() => {
    const caseSteps = [...STEPS];

    if (currentCase) {
      currentCase.syncCodes.forEach((code) => {
        caseSteps.push(code.code);
      });
    }

    setSteps(caseSteps);
  }, [actualLevel]);

  const countStep = () => {
    let step = 0;
    switch (status) {
      case "navigating": {
        step++;
        break;
      }
      case "preventing": {
        step += 2;
        break;
      }
      default: {
      }
    }

    currentCase?.syncCodes.map((code) => {
      if (code.entered) step++;
    });

    return step;
  };

  return (
    <View style={styles.container}>
      {currentCase ? (
        <>
          <Text style={styles.actual}>{t("actual_case")}</Text>
          <Text style={styles.case}>
            {t("case")} {currentCase.id}
          </Text>
          <CaseProgress />
          <AnimatedProgressBar
            currentStep={countStep()}
            totalSteps={steps.length - 1}
          />
        </>
      ) : (
        <>
          <Text style={styles.actual}>{t("actual_case")}</Text>
          <Text style={styles.case}>{t("waiting")}</Text>
          <CaseProgress />
          <AnimatedProgressBar currentStep={0} totalSteps={0} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: RoundedSizeSmall,
    borderWidth: BorderSize,
    borderColor: Colors.primary,
    padding: Spacing.two,
    flexDirection: "column",
    gap: Spacing.one,
  },
  actual: {
    textTransform: "uppercase",
    color: Colors.discrete_txt,
    fontSize: 12,
  },
  case: {
    textTransform: "uppercase",
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 800,
  },
});

export default CaseCard;

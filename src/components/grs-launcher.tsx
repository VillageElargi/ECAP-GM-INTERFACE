import { Colors, Spacing } from "@/constants/theme";
import { useApp } from "@/context/useApp";
import { TriangleAlert } from "lucide-react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import Button from "./ui/button";
import Modal from "./ui/modal";
import PulseView from "./ui/pulse-view";

const GRSLauncher = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { setStatus } = useApp();

  const launch = () => {
    setStatus("loading");

    setTimeout(() => {
      setStatus("searching");
    }, 5000);
  };

  const { t } = useTranslation();
  return (
    <>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title={t("confirm_action")}
        small={true}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalIcon}>
            <TriangleAlert color={Colors.discrete_txt} />
          </View>
          <Text style={styles.modalTitle}>{t("launch_grs")}</Text>
          <Text style={styles.modalTxt}>{t("launch_grs_dsc")}</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title={t("actions.cancel")}
              onPress={() => setModalOpen(false)}
            />
            <Button
              title={t("actions.confirm")}
              type="danger"
              onPress={launch}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.content}>
        <PulseView style={styles.pulserContainer}>
          <View style={styles.pulserContent}></View>
        </PulseView>
        <Text style={styles.title}>{t("pending_grs")}</Text>
        <Text style={styles.text}>{t("pending_grs_dsc")}</Text>
        <Button
          title={t("actions.start_grs")}
          onPress={() => setModalOpen(true)}
        ></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flexDirection: "column",
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: Spacing.three,
  },
  modalIcon: {
    marginTop: Spacing.three,
  },
  modalTitle: {
    color: Colors.main_txt,
    fontSize: 20,
  },
  modalTxt: {
    color: Colors.main_txt,
    fontSize: 15,
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: Spacing.two,
    flexDirection: "row",
    justifyContent: "center",
    gap: Spacing.three,
  },
  content: {
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
    marginBottom: Spacing.three,
  },
  pulserContainer: {
    width: 20,
    height: 20,
    padding: Spacing.one,
    borderRadius: 999,
    backgroundColor: `${Colors.primary}30`,
  },
  pulserContent: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
    backgroundColor: `${Colors.primary}`,
  },
});

export default GRSLauncher;

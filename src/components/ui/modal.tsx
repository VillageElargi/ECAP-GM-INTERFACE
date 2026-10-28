import { BorderSize, Colors, RoundedSize, Spacing } from "@/constants/theme";
import { X } from "lucide-react-native";
import { ReactNode } from "react";
import {
  Modal as BaseModal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ModalProps {
  modalOpen: boolean;
  title: string;
  small?: boolean;
  setModalOpen: (modalOpen: boolean) => void;

  children: ReactNode;
}

const Modal = ({
  modalOpen,
  title,
  small = false,
  setModalOpen,
  children,
}: ModalProps) => {
  return (
    <BaseModal
      animationType="fade"
      transparent
      visible={modalOpen}
      onRequestClose={() => setModalOpen(false)}
    >
      <View style={styles.hider}>
        <View style={[styles.container, small ? styles.small : styles.normal]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Pressable onPress={() => setModalOpen(false)}>
              <X color={Colors.main_txt} />
            </Pressable>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  hider: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    maxWidth: "80%",
    maxHeight: "80%",
    minWidth: 400,
    backgroundColor: Colors.container_bg,
    borderRadius: RoundedSize,
    borderWidth: BorderSize,
    borderColor: Colors.primary,
  },
  small: {
    maxWidth: 500,
  },
  normal: {
    maxWidth: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 350,
    borderBottomWidth: BorderSize,
    borderBottomColor: Colors.primary,
    padding: Spacing.two,
  },
  modalTitle: {
    color: Colors.main_txt,
    fontSize: 16,
  },
  content: {
    padding: Spacing.two,
  },
});

export default Modal;

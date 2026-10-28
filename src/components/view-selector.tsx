import { useApp } from "@/context/useApp";
import CaseManager from "./case-manager";
import GRSLauncher from "./grs-launcher";
import Loader from "./loader";

const ViewSelector = () => {
  const { status } = useApp();

  if (status == "waiting") return <GRSLauncher />;
  if (status == "loading") return <Loader />;
  if (["searching", "navigating", "preventing"].includes(status))
    return <CaseManager />;
  return null;
};

export default ViewSelector;

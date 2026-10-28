import { useApp } from "@/context/useApp";
import GRSLauncher from "./grs-launcher";
import Loader from "./loader";

const ViewSelector = () => {
  const { status } = useApp();

  if (status == "waiting") return <GRSLauncher />;
  if (status == "loading") return <Loader />;
  return null;
};

export default ViewSelector;

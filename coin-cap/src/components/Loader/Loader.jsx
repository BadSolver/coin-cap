import { ClipLoader } from "react-spinners";
import "./style.css";

export const Loader = () => {
  const override = {
    background: "transparent",
  };
  return (
    <div className="loader">
      <ClipLoader size={25} cssOverride={override} color="goldenrod" />
    </div>
  );
};
